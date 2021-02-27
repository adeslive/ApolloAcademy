import { BaseEntity, Column, Entity, ManyToOne } from 'typeorm';
import { Course } from './Course';
import { Teacher } from './Teacher';

@Entity()
export class VirtualClassroom extends BaseEntity{

    @ManyToOne(() => Teacher, teacher => teacher.classrooms, {primary: true})
    teacher!: Teacher;

    @ManyToOne(() => Course, course => course.classrooms, {primary: true})
    course!: Course;

    @Column({type: "int"})
    capacity!: number;

    @Column({type:"varchar"})
    link!: string;
}