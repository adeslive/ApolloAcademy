import argon2 from 'argon2';
import { Arg, Ctx, Field, ID, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { ORMContext } from '../types';
import { User } from './../entities/User';

// TO DO Mover a otro archivo
@ObjectType()
class ErrorField {
    @Field(() => String)
    field!: string;

    @Field(() => String)
    message!: string;
}

@ObjectType()
class UserResponse {

    @Field(() => [ErrorField], { nullable: true })
    errors?: ErrorField[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver()
export class UserResolver {

    @Query(() => User, {nullable: true})
    verifyLogin(@Ctx() {req} : ORMContext){
        if(!req.session.userID){
            return null
        }
        return User.findOne({id: req.session.userID})
    }

    @Query(() => [User])
    users(): Promise<User[]> {
        return User.find();
    }

    @Query(() => User)
    user(@Arg('id', () => ID) id: number) : Promise<User | undefined> {
        return User.findOne(id);
    }

    @Mutation(() => UserResponse)
    async createUser(
        @Arg('name', () => String) name: string,
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { req }  : ORMContext
    ): Promise<UserResponse> {
        
        const emailT = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
        const passNumT = /^([^\.]|[]).+[0-9]*([^\.]|$)/g
        let errors : ErrorField[] = [];

        if(!email || !emailT.test(email)){
            errors.push({
                field: "email",
                message: "El correo es invalido"
            });
        }

        if (!password || password.length < 6 || !passNumT.test(password)){
            errors.push({
                field: "password",
                        message: "La contraseña debe de tener al menos 8 digitos y 1 numero"
            });
        }

        if(errors.length > 0){
            return {errors}
        }

        const hash = await argon2.hash(password);
        const user = User.create({email: email, name: name, password: hash});
        
        try{
            await user.save();
        } catch(error){
            if(error.code == "ER_DUP_ENTRY") {
                return {
                    errors : [
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

        return {user};
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

    @Mutation(() => UserResponse)
    async login(
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() {req }: ORMContext
    ): Promise<UserResponse> {
        const user = await User.findOne({where: {email: email}})
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
        if(!valid){
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
    async logout(@Ctx() {req, res}: ORMContext){
        
        return new Promise(response => req.session.destroy(err => {
            if(err){
                console.error(err);
                response(false)
                return 
            }

            res.clearCookie("aid");
            response(true);
        }))
    }
}