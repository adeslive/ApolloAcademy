import {Entity, Property, PrimaryKey, BigIntType,} from '@mikro-orm/core';
import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User{

   
    @PrimaryKey({type: BigIntType })
    id!: number;

    @Field(() => ID)
    @Property({type: String, nullable: false})
    name!: string;

    @Field(() => String)
    @Property({type: String, nullable: false, unique:true})
    email!: string;
    
    @Field(() => String)
    @Property({type: String, nullable: false})
    password!: string;

    @Field(() => Date)
    @Property({type: "date"})
    createdAt = new Date();

    @Field(() => Date)
    @Property({type: "date", onUpdate: () => new Date()})
    updatedAt = new Date();
}