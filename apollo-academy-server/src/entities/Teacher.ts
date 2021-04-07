import { VirtualClassroom } from './VirtualClassroom';
import { Course } from './Course';
import { Coordinator } from './Coordinator';
import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Teacher extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => User)
    @OneToOne(() => User)
    @JoinColumn()
    user!: User;

    @ManyToOne(() => Coordinator, coordinator => coordinator.teachers, {nullable: true})
    coordinator!: Coordinator;

    @Field(() => [VirtualClassroom])
    @OneToMany(() => VirtualClassroom, virtualclassroom => virtualclassroom.teacher)
    classrooms!: VirtualClassroom[];
}