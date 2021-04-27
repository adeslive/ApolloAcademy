"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const Teacher_1 = require("../entities/Teacher");
const User_1 = require("../entities/User");
typeorm_seeding_1.define(Teacher_1.Teacher, (faker) => {
    const teacher = new Teacher_1.Teacher();
    teacher.user = typeorm_seeding_1.factory(User_1.User)();
    return teacher;
});
