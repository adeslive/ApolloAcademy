import { Float } from 'type-graphql';
import { ObjectType, ID, Field, Int } from 'type-graphql';
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './Course';
import { Teacher } from './Teacher';

@ObjectType()
@Entity()
export class VirtualClassroom extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column({type: "varchar"})
    description!: string;

    @Field(() => Teacher)
    @ManyToOne(() => Teacher, teacher => teacher.classrooms)
    teacher!: Teacher;
    
    @Field(() => Course)
    @ManyToOne(() => Course, course => course.classrooms)
    course!: Course;

    @Field(() => String)
    @Column({type: 'datetime'})
    time_start = new Date();

    @Field(() => Int)
    @Column()
    repeat!: number;

    @Field(() => Int)
    @Column({ type: "int" })
    capacity!: number;

    @Field(() => String)
    @Column({ type: "varchar" })
    link!: string;

    @Field(() => Boolean)
    @Column({ type: "bool", default: true })
    enable!: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @CreateDateColumn()
    updatedAt = new Date();
}