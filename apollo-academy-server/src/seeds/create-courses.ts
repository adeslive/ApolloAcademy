import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Course } from './../entities/Course';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateCourses implements Seeder {
    public async run(factory: Factory, connection : Connection) : Promise<any>
    {
        const course = await factory(Course)().create();
        let classrooms = await factory(VirtualClassroom)(course).createMany(3);
        
    }
}