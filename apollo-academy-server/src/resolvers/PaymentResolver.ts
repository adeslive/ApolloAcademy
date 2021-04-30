import { User } from './../entities/User';
import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Arg, Ctx, Field, ID, Mutation, ObjectType, Query, Resolver, Int } from 'type-graphql';
import { Stripe } from 'stripe';
import { CResponse, ORMContext } from '../types';
import { Receipt } from '../entities/Receipt';
import { randomBytes } from 'crypto';
import { Oauth } from '../entities/Oauth';
import { Course } from '../entities/Course';

@Resolver()
export class PaymentResolver {

    @Mutation(() => CResponse)
    async getPayments(
        @Ctx() { req, stripe }: ORMContext
    ) {
        const user = await User.findOne(req.session.userID);
        return {};
    }

    @Mutation(() => CResponse)
    async createCheckout(
        @Arg('classroom', () => ID) classID: number,
        @Ctx() { req, stripe, transport }: ORMContext
    ): Promise<CResponse> {

        const classroom = await VirtualClassroom.findOne({ relations: ["course"], where: { id: classID } });
        let user = null;
        if (req.session.userID) {
            user = await User.findOne({ id: req.session.userID })
        } else if (req.session.passport?.user) {
            /*
            return User
            .createQueryBuilder("user")
            .innerJoinAndSelect("user.oauth", "oauth")
            .where("oauth.remote_id = :id", { id: req.session.passport.user.remote_id })
            .getOne();*/
            const oauth = await Oauth.findOne({ where: { remote_id: req.session.passport?.user.remote_id } });
            if (oauth) {
                user = await User.findOne({ where: { oauth: oauth.id } });
            }
        }

        if (!classroom || !user) {
            return {
                errors: [{
                    field: "general",
                    message: "There was an error at checkout, please come back later"
                }]
            }
        }

        if (user.stripe_customer === '') {
            const customer = await stripe.customers.create({
                email: user.email ? user.email : undefined
            })

            user.stripe_customer = customer.id;
            await user.save();
        }

        let receipt = await Receipt.createQueryBuilder("receipt")
            .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .innerJoin("receipt.virtual", "classroom")
            .where('classroom.id = :id', { id: classID })
            .andWhere('receipt.paid = 0')
            .andWhere("receipt.id IS NOT NULL")
            .getOne();

        if (!receipt) {
            receipt = new Receipt();
            const codigo = randomBytes(16).toString('hex');

            receipt.user = user;
            receipt.amount = classroom?.course.price;
            receipt.virtual = classID;
            receipt.key = codigo;
            await receipt.save();
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer: user.stripe_customer ? user.stripe_customer : undefined,
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: classroom.course.name
                    },
                    unit_amount: classroom.course.price * 100,
                },
                quantity: 1
            }],
            success_url: `http://18.189.235.128/pay/${receipt.id}?key=${receipt.key}`,
            cancel_url: 'http://18.189.235.128/pay/-1'
        })

        return { stripeID: session.id };

    }

    @Mutation(() => CResponse)
    async pay(
        @Arg('classroom', () => ID) id: number,
        @Arg('key', () => String) key: string,
        @Ctx() { req, stripe, transport }: ORMContext
    ): Promise<CResponse> {

        const receipt = await Receipt.findOneOrFail(id);

        if (key == receipt.key) {

            receipt.paid = true;
            

            let user = null;
            if (req.session.userID) {
                user = await User.findOne({ id: req.session.userID })
            } else if (req.session.passport?.user) {
                /*
                return User
                .createQueryBuilder("user")
                .innerJoinAndSelect("user.oauth", "oauth")
                .where("oauth.remote_id = :id", { id: req.session.passport.user.remote_id })
                .getOne();*/
                const oauth = await Oauth.findOne({ where: { remote_id: req.session.passport?.user.remote_id } });
                if (oauth) {
                    user = await User.findOne({ where: { oauth: oauth.id } });
                }
            }
            console.log(user);
            if(user != null && user != undefined)
            {
                try {
                    let mail = await transport.sendMail({
                        from: '"Apollo Academy" <apolloacademyedu@gmail.com>', // sender address
                        to: user.email, // list of receivers
                        subject: "ApolloAcademy - Bienvenido al curso", // Subject line
                        text: "Bienvenido", // plain text body
                        html: `<div style="margin: 4rem; background-color: LightGray; text-align: center; height: 500px">
                        <div style="">
                          <h1>Primero que nada gracias por todo</h1>
                          <div style="background-color: white; margin: 0 4rem 4rem 4rem; height:400px">
                            <div style="padding-top: 4rem">
                              <h2> ${user.name} te damos la bienvenida al curso</h2>
                              <p>Si tu no fuiste quien matriculo el curso, por favor ponte en contacto con este correo</p></p>
                            </div>
                            <div style="display: flex; margin: 4rem 10rem 0 10rem">
                              
                            </div>
                          </div>
                        </div>
                      </div>`, // html body
                    });
                } catch (e) {
                }
            }
            receipt.save();
            return {
                receipt
            }
        }

        return {
            errors: [{
                field: "general",
                message: "Error"
            }]
        }
    }

    @Query(() => Boolean)
    async isPaid(
        @Arg('id', () => ID) id: number,
        @Ctx() { req }: ORMContext
    ) {
        let receipt = null;
        receipt = Receipt.createQueryBuilder("receipt")
            .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .leftJoin("receipt.virtual", "classroom")
            .where('classroom.id = :id', { id: id })
            .andWhere('receipt.paid = 1')
            .andWhere("receipt.id IS NOT NULL")
            .getOne();

        if (await receipt) return true;
        else {
            return false;
        }
    }
}