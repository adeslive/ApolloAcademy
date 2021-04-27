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
exports.ClasroomResolver = void 0;
const VirtualClassroom_1 = require("./../entities/VirtualClassroom");
const type_graphql_1 = require("type-graphql");
let ClasroomResolver = class ClasroomResolver {
    classrooms() {
        return VirtualClassroom_1.VirtualClassroom.createQueryBuilder("class")
            .leftJoinAndSelect("class.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("class.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = 1")
            .getMany();
    }
    classroomsByCourse(id) {
        return VirtualClassroom_1.VirtualClassroom.createQueryBuilder("class")
            .leftJoinAndSelect("class.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("class.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = 1")
            .andWhere("course.id = :id", { id: id })
            .getMany();
    }
    classroom(id) {
        return VirtualClassroom_1.VirtualClassroom.createQueryBuilder("class")
            .leftJoinAndSelect("class.course", "course")
            .leftJoinAndSelect("course.classrooms", "classroom", "classroom.id <> :id", { id: id })
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("class.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where("course.active = 1")
            .andWhere("class.id = :id", { id: id })
            .getOne();
    }
    changeClassRoomState(id, newState) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroom = yield VirtualClassroom_1.VirtualClassroom.findOne({
                where: {
                    id: id
                }
            });
            if (classroom) {
                classroom.enable = newState;
                classroom.save();
                return true;
            }
            return false;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [VirtualClassroom_1.VirtualClassroom]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClasroomResolver.prototype, "classrooms", null);
__decorate([
    type_graphql_1.Query(() => [VirtualClassroom_1.VirtualClassroom]),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClasroomResolver.prototype, "classroomsByCourse", null);
__decorate([
    type_graphql_1.Query(() => VirtualClassroom_1.VirtualClassroom),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClasroomResolver.prototype, "classroom", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __param(1, type_graphql_1.Arg('newState', () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], ClasroomResolver.prototype, "changeClassRoomState", null);
ClasroomResolver = __decorate([
    type_graphql_1.Resolver()
], ClasroomResolver);
exports.ClasroomResolver = ClasroomResolver;
