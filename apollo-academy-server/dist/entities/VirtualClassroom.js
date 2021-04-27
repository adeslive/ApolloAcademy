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
exports.VirtualClassroom = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Course_1 = require("./Course");
const Teacher_1 = require("./Teacher");
let VirtualClassroom = class VirtualClassroom extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.time_start = new Date();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VirtualClassroom.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], VirtualClassroom.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => Teacher_1.Teacher),
    typeorm_1.ManyToOne(() => Teacher_1.Teacher, teacher => teacher.classrooms),
    __metadata("design:type", Teacher_1.Teacher)
], VirtualClassroom.prototype, "teacher", void 0);
__decorate([
    type_graphql_1.Field(() => Course_1.Course),
    typeorm_1.ManyToOne(() => Course_1.Course, course => course.classrooms),
    __metadata("design:type", Course_1.Course)
], VirtualClassroom.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", Object)
], VirtualClassroom.prototype, "time_start", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], VirtualClassroom.prototype, "repeat", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: "int" }),
    __metadata("design:type", Number)
], VirtualClassroom.prototype, "capacity", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], VirtualClassroom.prototype, "link", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ type: "bool", default: true }),
    __metadata("design:type", Boolean)
], VirtualClassroom.prototype, "enable", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], VirtualClassroom.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], VirtualClassroom.prototype, "updatedAt", void 0);
VirtualClassroom = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], VirtualClassroom);
exports.VirtualClassroom = VirtualClassroom;
