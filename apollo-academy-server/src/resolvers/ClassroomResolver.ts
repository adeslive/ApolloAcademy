import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Arg, ID, Int, Mutation, Query, Resolver } from "type-graphql";


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
            .where("course.active = 1")
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
            .where("course.active = 1")
            .andWhere("course.id = :id", {id: id})
            .getMany();
    }

    @Query(() => VirtualClassroom)
    classroom(
        @Arg('id', () => ID) id : number
    ) : Promise<VirtualClassroom | undefined> {

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

    @Mutation(() => Boolean)
    async changeClassRoomState(
        @Arg('id', () => ID) id : number,
        @Arg('newState', () => Boolean) newState : boolean
    ){
        const classroom = await VirtualClassroom.findOne({
            where: { 
                id: id
            }
        });

        if(classroom)
        {
            classroom.enable = newState;
            classroom.save();
            return true;
        }

        return false;
    }
}