import { User } from './User';

import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Oauth extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => User)
    @OneToOne(() => User, user => user.oauth)
    user!: User;

    @Field(() => String)
    @Column({type: "varchar", unique: true})
    remote_id!: string;

    @Field(() => Boolean)
    @Column({type: "boolean", default: true})
    active!: boolean;
}