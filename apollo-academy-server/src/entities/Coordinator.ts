import { Teacher } from './Teacher';
import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Coordinator extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @OneToMany(() => Teacher, teacher => teacher.coordinator)
    teachers!: Teacher[];
}