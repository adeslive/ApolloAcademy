import { VirtualClassroom } from './VirtualClassroom';
import { User } from './User';
import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Receipt extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => VirtualClassroom, {nullable: true})
    @OneToOne(() => VirtualClassroom)
    @JoinColumn()
    virtual!: number;

    @Field(() => String)
    @Column()
    key! : string;

    @Field(() => Float, {nullable: true})
    @Column({nullable: true})
    amount!: number;

    @Field(() => Boolean)
    @Column({default: false})
    paid!: boolean;

    @Field(() => User)
    @ManyToOne(() => User)
    @JoinColumn()
    user!: User;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();
}