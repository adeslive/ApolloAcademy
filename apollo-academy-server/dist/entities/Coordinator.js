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
exports.Coordinator = void 0;
const Teacher_1 = require("./Teacher");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Coordinator = class Coordinator extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Coordinator.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => User_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.User)
], Coordinator.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => Teacher_1.Teacher, teacher => teacher.coordinator),
    __metadata("design:type", Array)
], Coordinator.prototype, "teachers", void 0);
Coordinator = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Coordinator);
exports.Coordinator = Coordinator;
