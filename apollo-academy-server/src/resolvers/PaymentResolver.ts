import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Arg, Ctx, Field, ID, Mutation, ObjectType, Query, Resolver, Int } from 'type-graphql';
import { Receipt } from '../entities/Receipt';
import { CResponse, ORMContext } from '../types';

@Resolver()
export class PaymentResolver {

    @Mutation(() => CResponse)
    async createCheckout(
        @Arg('classroom', () => Int) classID : number,
        @Ctx() {req, stripe, transport} : ORMContext
    ) : Promise<CResponse>{
        /*const classroom = await VirtualClassroom.findOne(classID);
        if(!req.session.userID || !classroom)
        {
            return {
                errors: [{
                    field: "general",
                    message: "There was an error at checkout, please come back later"
                }]
            }
        }*/

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Curso de Idiomas'                   
                    },
                    unit_amount: 1000,
                },
                quantity: 1
            }],
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel'
        })

        return { stripeID: session.id };
    }
    
    @Mutation(() => CResponse)
    async pay(
        @Arg('classroom', () => Int) classID : number,
        @Ctx() {req, stripe, transport} : ORMContext
    ) : Promise<CResponse>{

        const classroom = await VirtualClassroom.findOne(classID);
        if(!req.session.userID || !classroom)
        {
            return {
                errors: [{
                    field: "general",
                    message: "There was an error at checkout, please come back later"
                }]
            }
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    unit_amount: 100
                },
                quantity: 1
            }],
            success_url: 'http:localhost:3000/success',
            cancel_url: 'http:localhost:3000/cancel'
        })

        return { stripeID: session.id };
    }
}