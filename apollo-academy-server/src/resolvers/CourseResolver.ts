import { Course } from './../entities/Course';
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";


@Resolver()
export class CourseResolver {

    @Query(() => [Course])
    courses() : Promise<Course[]> {
        return Course.find();
    }

    @Mutation(() => Course)
    course(
        @Arg('id', () => Int) courseID : number
    ) : Promise<Course | undefined> {
        return Course.findOne(courseID);
    }
}