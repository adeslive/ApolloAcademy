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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const VirtualClassroom_1 = require("./VirtualClassroom");
const Coordinator_1 = require("./Coordinator");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Teacher = class Teacher extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Teacher.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typeorm_1.OneToOne(() => User_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.User)
], Teacher.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Coordinator_1.Coordinator, coordinator => coordinator.teachers, { nullable: true }),
    __metadata("design:type", Coordinator_1.Coordinator)
], Teacher.prototype, "coordinator", void 0);
__decorate([
    type_graphql_1.Field(() => [VirtualClassroom_1.VirtualClassroom]),
    typeorm_1.OneToMany(() => VirtualClassroom_1.VirtualClassroom, virtualclassroom => virtualclassroom.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "classrooms", void 0);
Teacher = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Teacher);
exports.Teacher = Teacher;
