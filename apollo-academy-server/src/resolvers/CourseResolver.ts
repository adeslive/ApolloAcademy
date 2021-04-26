import { Course } from './../entities/Course';
import { Arg, Ctx, ID, Int, Mutation, Query, Resolver } from "type-graphql";
import { ORMContext } from '../types';
import { Like } from 'typeorm';


@Resolver()
export class CourseResolver {

    @Query(() => [Course])
    courses(): Promise<Course[]> {
        return Course.find({relations:["language", "classrooms", "classrooms.teacher", "classrooms.teacher.user"]});
    }

    @Mutation(() => Course)
    course(
        @Arg('id', () => Int) id: number
    ): Promise<Course | undefined> {

        return Course.createQueryBuilder("course")
            .innerJoinAndSelect("course.classrooms", "classroom")
            .innerJoinAndSelect("course.language", "language")
            .innerJoinAndSelect("course.teacher", "teacher")
            .innerJoinAndSelect("teacher.user", "user")
            .where("course.id = :id", { id: id })
            .getOne();
    }

    @Query(() => [Course])
    async mycourses(@Ctx() { req, res }: ORMContext) {
        return Course.createQueryBuilder("course")
            .innerJoinAndSelect("course.classrooms", "classroom")
            .innerJoinAndSelect("course.language", "language")
            .innerJoinAndSelect("classroom.teacher", "teacher")
            .innerJoinAndSelect("teacher.user", "user")
            .innerJoinAndSelect("receipt", "receipt", "receipt.virtual = classroom.id ")
            .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .where('receipt.paid = 1')
            .andWhere("receipt.id IS NOT NULL")
            .getMany();
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

    @Mutation(() => Boolean)
    async changeCourseState(
        @Arg('id', () => ID) id : number,
        @Arg('newState', () => Boolean) newState : boolean
    ){
        const course = await Course.findOne({
            where: { 
                id: id
            }
        });

        if(course)
        {
            course.active = newState;
            course.save();
            return true;
        }

        return false;
    }
}