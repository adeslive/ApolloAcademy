import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Oauth } from './../entities/Oauth';
import argon2 from 'argon2';
import { Arg, Ctx, Field, ID, Int, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { ORMContext, CResponse, ErrorField } from '../types';
import { User } from './../entities/User';
import { randomBytes } from 'crypto';
import { Course } from '../entities/Course';
import { date } from 'faker';

// Verifican email y contraseña
const emailT = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
const passNumT = /^([^\.]|[]).+[0-9]*([^\.]|$)/g

// TO DO Mover a otro archivo


@Resolver()
export class UserResolver {

    @Query(() => User, { nullable: true })
    async verifyLogin(@Ctx() { req }: ORMContext) {
        if (req.session.userID) {
            return User.findOne({ id: req.session.userID })
        } else if (req.session.passport?.user) {
            /*
            return User
            .createQueryBuilder("user")
            .innerJoinAndSelect("user.oauth", "oauth")
            .where("oauth.remote_id = :id", { id: req.session.passport.user.remote_id })
            .getOne();*/
            const oauth = await Oauth.findOne({ where: { remote_id: req.session.passport?.user.remote_id } });
            if (oauth) {
                return User.findOne({ where: { oauth: oauth.id } });
            }
        }
        return null;
    }

    @Query(() => [User])
    users(): Promise<User[]> {
        return User.find();
    }

    @Query(() => User)
    user(@Arg('id', () => ID) id: number): Promise<User | undefined> {
        return User.findOne(id);
    }

    @Mutation(() => CResponse)
    async getCode(
        @Arg('email', () => String) email: string,
        @Ctx() { req, transport }: ORMContext
    ): Promise<CResponse> {

        const codigo = randomBytes(2).toString('hex');
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return {
                errors: [{
                    field: "email",
                    message: "El usuario no existe"
                }]
            }
        }

        await transport.sendMail({
            from: '"Apollo Academy" <apolloacademyedu@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "ApolloAcademy - Recuperar contraseña", // Subject line
            text: codigo, // plain text body
            html: `<b>Codigo: ${codigo}</b>`, // html body
        });

        user.password_reset = codigo;
        user.save();

        return { user };
    }


    @Mutation(() => CResponse)
    async restore(
        @Arg('code', () => String) code: string,
        @Arg('email', () => String) email: string,
        @Ctx() { req, stripe }: ORMContext
    ): Promise<CResponse> {

        // TO DO cambiar codigo, generar numeros
        const user = await User.findOne({ where: { email: email } });
        if (user && user.password_reset == code) {
            user.password_reset = "-1";
            user.save();
            return { user };
        }

        return {
            errors: [{
                field: "code",
                message: "El codigo es incorrecto"
            }]
        };
    }

    @Mutation(() => CResponse)
    async changePassword(
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { req }: ORMContext
    ): Promise<CResponse> {

        if (!password || password.length < 8 || !passNumT.test(password)) {
            return {
                errors: [{
                    field: "password",
                    message: "La contraseña debe de tener al menos 8 digitos y 1 numero"
                }]
            };
        }

        // TO DO cambiar codigo, generar numeros
        const user = await User.findOne({ where: { email: email, password_reset: "-1" } });
        if (user) {
            user.password = await argon2.hash(password);
            user.password_reset = "";
            user.save();
            return { user };
        }

        return {
            errors: [{
                field: "email",
                message: "El usuario no existe"
            }]
        };
    }

    @Mutation(() => CResponse)
    async register(
        @Arg('name', () => String) name: string,
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { req, transport }: ORMContext
    ): Promise<CResponse> {

        let errors: ErrorField[] = [];

        if (!email || !emailT.test(email)) {
            errors.push({
                field: "email",
                message: "El correo es invalido"
            });
        }

        if (!password || password.length < 8 || !passNumT.test(password)) {
            errors.push({
                field: "password",
                message: "La contraseña debe de tener al menos 8 digitos y 1 numero"
            });
        }

        if (errors.length > 0) {
            return { errors }
        }

        const hash = await argon2.hash(password);
        const user = User.create({ email: email, name: name, password: hash });

        try {
            await user.save();
        } catch (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Este correo ya está registrado"
                        }
                    ]
                }
            }
        };

        // Envia cookie para iniciar sesion al registrarse
        req.session.userID = user.id;

        try{
            await transport.sendMail({
                from: '"Apollo Academy" <apolloacademyedu@gmail.com>', // sender address
                to: email, // list of receivers
                subject: "ApolloAcademy - Bienvenido", // Subject line
                text: "Bienvenido", // plain text body
                html: `<div style="margin: 4rem; background-color: LightGray; text-align: center; height: 500px">
                <div style="">
                  <h1>Bienvenido/a a ApolloAcademy</h1>
                  <div style="background-color: white; margin: 0 4rem 4rem 4rem; height:400px">
                    <div style="padding-top: 4rem">
                      <h2> ${user.name} te damos la bienvenida a Apollo Academy</h2>
                      <p>Para ingresar a nuestra aplicación puedes ingresar en el siguiente enlace: <a href="https://localhost" target="_blank">Apollo Academy</a></p>
                    </div>
                    <div style="display: flex; margin: 4rem 10rem 0 10rem">
                      
                    </div>
                  </div>
                </div>
              </div>`, // html body
            });
        }catch(e)
        {

        }
        return { user };
    }

    // TO DO Refactor
    /*@Mutation(() => User)
    async updateUser(
        @Arg('id', () => ID) id: number,
        @Arg('name', () => String, { nullable: true }) name: string,
        @Arg('email', () => String, { nullable: true }) email: string,
        @Arg('password', () => String, { nullable: true }) password: string
    ): Promise<User | undefined> {
        const hash = await argon2.hash(password);
        const user = await User.findOne({ id });
        
        if (typeof name !== undefined) { user.name = name }
        if (typeof email !== undefined) { user.email = email }
        if (typeof password !== undefined) { user.password = hash }

        await em.persistAndFlush(user);

        return user;
    }*/

    @Mutation(() => CResponse)
    async login(
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { req }: ORMContext
    ): Promise<CResponse> {
        const user = await User.findOne({ where: { email: email } })
        if (!user) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "El usuario no existe"
                    }
                ]
            };
        }

        const valid = await argon2.verify(user.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "La contraseña es incorrecta"
                    }
                ]
            };
        }

        req.session.userID = user.id;

        return {
            user
        };
    }

    @Mutation(() => Boolean)
    async logout(@Ctx() { req, res }: ORMContext) {

        return new Promise(response => req.session.destroy(err => {
            if (err) {
                console.error(err);
                response(false)
                return
            }

            res.clearCookie("aid");
            response(true);
        }))
    }

    @Query(() => [Date])
    async classroomdates(
        @Ctx() { req }: ORMContext
    ) {
        let dates: Date[] = [];
        const classrooms = await VirtualClassroom.createQueryBuilder("classroom")
            .innerJoinAndSelect("classroom.teacher", "teacher")
            .innerJoinAndSelect("teacher.user", "user")
            .innerJoinAndSelect("receipt", "receipt", "receipt.virtual = classroom.id ")
            .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .where("classroom.enable = 1")
            .andWhere('receipt.paid = 1')
            .andWhere("receipt.id IS NOT NULL")
            .getMany();

        classrooms.forEach((value, index) => {
            for (let i = 0; i < value.repeat + 1; i++) {
                let date = new Date();
                date.setDate(value.time_start.getDate() + i * 7)
                dates.push(date);
            }
        })

        return dates;
    }

    @Mutation(() => [VirtualClassroom])
    async activities(
        @Arg('date', () => Date) dateToCheck: Date,
        @Ctx() { req }: ORMContext
    ) {
        let date = new Date(dateToCheck.getFullYear(), dateToCheck.getMonth(), dateToCheck.getDate())
        let result : VirtualClassroom[] = [];
        const classrooms = await VirtualClassroom.createQueryBuilder("classroom")
            .innerJoinAndSelect("classroom.teacher", "teacher")
            .innerJoinAndSelect("classroom.course", "course")
            .innerJoinAndSelect("teacher.user", "user")
            .innerJoinAndSelect("receipt", "receipt", "receipt.virtual = classroom.id ")
            .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .where("classroom.enable = 1")
            .andWhere('receipt.paid = 1')
            .andWhere("receipt.id IS NOT NULL")
            .getMany();

        classrooms.forEach((value, index) => {
            for (let i = 0; i < value.repeat + 1; i++) {
                let endDate = new Date(value.time_start.getFullYear(), value.time_start.getMonth(), value.time_start.getDate());
                let startDate = new Date(value.time_start.getFullYear(), value.time_start.getMonth(), value.time_start.getDate());
                startDate.setDate(value.time_start.getDate() + i * 7);
                endDate.setDate(value.time_start.getDate() + i * 7 + 1);
                if(date >= startDate && date < endDate)
                {
                    result.push(value);
                    break;
                }
            }
        })

        return result;
    }
}