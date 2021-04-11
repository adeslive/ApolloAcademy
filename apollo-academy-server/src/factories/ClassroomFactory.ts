import { VirtualClassroom } from './../entities/VirtualClassroom';
import { define, factory } from 'typeorm-seeding';
import * as Faker from 'faker';
import { Teacher } from '../entities/Teacher';

define(VirtualClassroom, (faker : typeof Faker, course : any) => {
    const classroom = new VirtualClassroom();


    classroom.capacity = faker.random.number(10);
    classroom.description = faker.random.words(20);
    classroom.link = "https://apolloacademy.daily.co/OaO19WLAVqW8H9fBnQNr";
    
    classroom.teacher = factory(Teacher)() as any
    classroom.course = course;

    return classroom;
})