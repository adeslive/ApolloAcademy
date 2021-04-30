import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Language } from './../entities/Language';
import { define, factory } from 'typeorm-seeding';

import * as Faker from 'faker';
import { Course } from '../entities/Course';

define(Course, (faker : typeof Faker) => {
    const course = new Course();

    course.name = "Curso de Idioma #2 ";
    course.price = faker.random.number(100);
    course.language = factory(Language)() as any;
    
    return course;
})