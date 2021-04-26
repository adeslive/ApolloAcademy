
import { VirtualClassroom } from './VirtualClassroom';
import { User } from './User';
import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Room {

    @Field()
    @PrimaryGeneratedColumn()
    id! : number;

    @Field()
    @Column()
    link!: string;

    @Field(() => VirtualClassroom)
    @ManyToMany(() => VirtualClassroom)
    @JoinColumn()
    clasrooms!: number;

    @Field()
    @Column()
    active!: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();
}