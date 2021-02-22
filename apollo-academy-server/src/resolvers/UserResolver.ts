import { User } from './../entities/User';
import { Arg, Ctx, Query, Resolver, ID, Mutation } from 'type-graphql';
import { ORMContext } from '../types';

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users(
        @Ctx() { em }: ORMContext
    ): Promise<User[]> {
        return em.find(User, {})
    }
    

    @Query(() => User)
    user(
        @Arg('id', () => ID) id: number,
        @Ctx() { em }: ORMContext
    ): Promise<User> {
        return em.findOneOrFail(User, { id });
    }

    @Mutation(() => User)
    async createUser(
        @Arg('name', () => String) name: string,
        @Arg('email', () => String) email: string,
        @Arg('password', () => String) password: string,
        @Ctx() { em }: ORMContext
    ): Promise<User> {
        const user =  em.create(User, {name: name, email: email, password: password});
        await em.persistAndFlush(user);
        return user;
    }

    @Mutation(() => User)
    async updateUser(
        @Arg('id', () => ID) id : number,
        @Arg('name', () => String, {nullable: true}) name: string,
        @Arg('email', () => String, {nullable: true}) email: string,
        @Arg('password', () => String, {nullable: true}) password: string,
        @Ctx() { em }: ORMContext
    ): Promise<User> {
        const user =  await em.findOneOrFail(User, {id});
        if(typeof name !== undefined) {user.name = name}
        if(typeof email !== undefined) {user.email = email}
        if(typeof password !== undefined) {user.password = password}
        await em.persistAndFlush(user);
        return user;
    }
}