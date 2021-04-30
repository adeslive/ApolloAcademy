import { Oauth } from './Oauth';

import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({default: null})
    stripe_customer!: string;

    @Field(() => Oauth)
    @OneToOne(() => Oauth, oauth => oauth.user , {nullable: true})
    @JoinColumn()
    oauth?: Oauth;

    @Field(() => String)
    @Column()
    name!: string;

    @Field(() => String, {nullable: true})
    @Column({unique: true, nullable: true})
    email?: string;
    
    @Column()
    password!: string;

    @Column()
    password_reset!: string;

    @Column({default: true})
    active!: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();
}