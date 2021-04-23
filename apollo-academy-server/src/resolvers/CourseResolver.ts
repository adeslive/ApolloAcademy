import { Course } from './../entities/Course';
import { Arg, Ctx, ID, Int, Mutation, Query, Resolver } from "type-graphql";
import { ORMContext } from '../types';
import { Like } from 'typeorm';


@Resolver()
export class CourseResolver {

    @Query(() => [Course])
    courses(): Promise<Course[]> {
        return Course.find();
    }

    @Mutation(() => Course)
    course(
        @Arg('id', () => Int) id: number
    ): Promise<Course | undefined> {

        return Course.createQueryBuilder("course")
            .leftJoinAndSelect("course.classrooms", "classroom")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("course.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = 1")
            .andWhere("course.id = :id", { id: id })
            .getOne();
    }

    @Query(() => [Course])
    searchCourses(
        @Arg('query', () => String) query: string
    ): Promise<Course[]> {
        return Course.find({
            relations: ["classrooms", "language", "classrooms.teacher", "classrooms.teacher.user"],
            where: { 
                name: Like(`%${query}%`)
            }
        });
    }
}