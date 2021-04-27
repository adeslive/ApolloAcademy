"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Teacher_1 = require("../entities/Teacher");
let TeacherResolver = class TeacherResolver {
    teacher(id) {
        return Teacher_1.Teacher.createQueryBuilder("teacher")
            .leftJoinAndSelect("teacher.classrooms", "virtualclassroom")
            .leftJoinAndSelect("virtualclassroom.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("teacher.user", "user")
            .where("teacher.id = :id", { id: id })
            .getOne();
    }
};
__decorate([
    type_graphql_1.Query(() => Teacher_1.Teacher),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherResolver.prototype, "teacher", null);
TeacherResolver = __decorate([
    type_graphql_1.Resolver()
], TeacherResolver);
exports.TeacherResolver = TeacherResolver;
