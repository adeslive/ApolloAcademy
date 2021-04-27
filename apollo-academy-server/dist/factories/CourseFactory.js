"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Language_1 = require("./../entities/Language");
const typeorm_seeding_1 = require("typeorm-seeding");
const Course_1 = require("../entities/Course");
typeorm_seeding_1.define(Course_1.Course, (faker) => {
    const course = new Course_1.Course();
    course.name = "Curso de Idioma #1 ";
    course.price = faker.random.number(100);
    course.language = typeorm_seeding_1.factory(Language_1.Language)();
    return course;
});
