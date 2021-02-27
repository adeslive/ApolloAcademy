import { User } from './User';

import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class FacebookUser extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @Field(() => String)
    @Column({type: "varchar"})
    facebook!: string;

    @Field(() => Boolean)
    @Column({type: "boolean", default: true})
    active!: boolean;
}