import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Arg, ID, Int, Query, Resolver } from "type-graphql";


@Resolver()
export class ClasroomResolver {

    @Query(() => [VirtualClassroom])
    classrooms(
    ) : Promise<VirtualClassroom[]> {
        return VirtualClassroom.createQueryBuilder("class")
            .leftJoinAndSelect("class.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("class.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = :active", {active: 1})
            .getMany();
    }


    @Query(() => [VirtualClassroom])
    classroomsByCourse(
        @Arg('id', () => ID) id : number
    ) : Promise<VirtualClassroom[]> {
        return VirtualClassroom.createQueryBuilder("class")
            .leftJoinAndSelect("class.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("class.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = :active", {active: 1})
            .andWhere("course.id = :id", {id: id})
            .getMany();
    }

    @Query(() => VirtualClassroom)
    classroom(
        @Arg('id', () => ID) id : number
    ) : Promise<VirtualClassroom | undefined> {

        return VirtualClassroom.findOne({
            relations: ["course", "course.classrooms", "course.language", "teacher", "teacher.user"]
        })

        return VirtualClassroom.createQueryBuilder("class")
            .leftJoinAndSelect("class.course", "course")
            .leftJoinAndSelect("course.classrooms", "classroom", "classroom.id <> :id", {id: id})
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("class.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = 1")
            .andWhere("class.id = :id", {id: id})
            .getOne();
    }
}