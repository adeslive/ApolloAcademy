import { VirtualClassroom } from './VirtualClassroom';
import { User } from './User';
import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Receipt extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => Int)
    @OneToOne(() => VirtualClassroom)
    @JoinColumn()
    virtualID!: number;

    @Field(() => String)
    @Column()
    stripeID! : string;

    @Field(() => Float, {nullable: true})
    @Column({nullable: true})
    amount!: number;

    @Field(() => User)
    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();
}