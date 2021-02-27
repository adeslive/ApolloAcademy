import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Student extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

}