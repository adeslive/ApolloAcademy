import { Arg, ID, Query, Resolver } from "type-graphql";
import { Teacher } from "../entities/Teacher";


@Resolver()
export class TeacherResolver {
    @Query(() => Teacher)
    teacher(
        @Arg('id', () => ID) id : number
    ) : Promise<Teacher | undefined > {
        return Teacher.createQueryBuilder("teacher")
            .leftJoinAndSelect("teacher.classrooms", "virtualclassroom")
            .leftJoinAndSelect("virtualclassroom.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("teacher.user", "user")
            .where("teacher.id = :id", {id: id})
            .getOne()
    }

}