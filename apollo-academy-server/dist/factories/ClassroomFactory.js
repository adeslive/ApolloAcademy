"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VirtualClassroom_1 = require("./../entities/VirtualClassroom");
const typeorm_seeding_1 = require("typeorm-seeding");
const Teacher_1 = require("../entities/Teacher");
typeorm_seeding_1.define(VirtualClassroom_1.VirtualClassroom, (faker, course) => {
    const classroom = new VirtualClassroom_1.VirtualClassroom();
    classroom.capacity = faker.random.number(10);
    classroom.description = faker.random.words(20);
    classroom.link = "OaO19WLAVqW8H9fBnQNr";
    classroom.teacher = typeorm_seeding_1.factory(Teacher_1.Teacher)();
    classroom.course = course;
    return classroom;
});
