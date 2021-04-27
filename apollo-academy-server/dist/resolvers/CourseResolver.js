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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const Course_1 = require("./../entities/Course");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let CourseResolver = class CourseResolver {
    courses() {
        return Course_1.Course.find({ relations: ["language", "classrooms", "classrooms.teacher", "classrooms.teacher.user"] });
    }
    course(id) {
        return Course_1.Course.createQueryBuilder("course")
            .innerJoinAndSelect("course.classrooms", "classroom")
            .innerJoinAndSelect("course.language", "language")
            .innerJoinAndSelect("course.teacher", "teacher")
            .innerJoinAndSelect("teacher.user", "user")
            .where("course.id = :id", { id: id })
            .getOne();
    }
    mycourses({ req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            return Course_1.Course.createQueryBuilder("course")
                .innerJoinAndSelect("course.classrooms", "classroom")
                .innerJoinAndSelect("course.language", "language")
                .innerJoinAndSelect("classroom.teacher", "teacher")
                .innerJoinAndSelect("teacher.user", "user")
                .innerJoinAndSelect("receipt", "receipt", "receipt.virtual = classroom.id ")
                .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
                .where('receipt.paid = 1')
                .andWhere("receipt.id IS NOT NULL")
                .getMany();
        });
    }
    searchCourses(query) {
        return Course_1.Course.find({
            relations: ["classrooms", "language", "classrooms.teacher", "classrooms.teacher.user"],
            where: {
                name: typeorm_1.Like(`%${query}%`)
            }
        });
    }
    changeCourseState(id, newState) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield Course_1.Course.findOne({
                where: {
                    id: id
                }
            });
            if (course) {
                course.active = newState;
                course.save();
                return true;
            }
            return false;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Course_1.Course]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "courses", null);
__decorate([
    type_graphql_1.Mutation(() => Course_1.Course),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "course", null);
__decorate([
    type_graphql_1.Query(() => [Course_1.Course]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "mycourses", null);
__decorate([
    type_graphql_1.Query(() => [Course_1.Course]),
    __param(0, type_graphql_1.Arg('query', () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "searchCourses", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __param(1, type_graphql_1.Arg('newState', () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "changeCourseState", null);
CourseResolver = __decorate([
    type_graphql_1.Resolver()
], CourseResolver);
exports.CourseResolver = CourseResolver;
