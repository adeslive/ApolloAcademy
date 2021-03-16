import { Field, ObjectType, ID } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Language extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!:number;

    @Field(() => String)
    @Column({type:"varchar"})
    name!:string;

    @Field(() => String)
    @Column({type:"varchar"})
    code!:string;

    @Field(() => Boolean)
    @Column({type:"boolean"})
    active!: boolean;
}