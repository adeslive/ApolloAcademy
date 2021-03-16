import { Float } from 'type-graphql';
import { ObjectType, ID, Field, Int } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './Course';
import { Teacher } from './Teacher';

@ObjectType()
@Entity()
export class VirtualClassroom extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => Teacher)
    @ManyToOne(() => Teacher, teacher => teacher.classrooms, { primary: true })
    teacher!: Teacher;

    @Field(() => Course)
    @ManyToOne(() => Course, course => course.classrooms, { primary: true })
    course!: Course;

    @Field(() => Int)
    @Column({ type: "int" })
    capacity!: number;

    @Field(() => String)
    @Column({ type: "varchar" })
    link!: string;
}