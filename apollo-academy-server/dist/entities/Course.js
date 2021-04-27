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
exports.Course = void 0;
const type_graphql_1 = require("type-graphql");
const VirtualClassroom_1 = require("./VirtualClassroom");
const Language_1 = require("./Language");
const typeorm_1 = require("typeorm");
const type_graphql_2 = require("type-graphql");
let Course = class Course extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    type_graphql_2.Field(() => type_graphql_2.ID, { nullable: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    type_graphql_2.Field(() => Language_1.Language),
    typeorm_1.OneToOne(() => Language_1.Language),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Language_1.Language)
], Course.prototype, "language", void 0);
__decorate([
    type_graphql_2.Field(() => [VirtualClassroom_1.VirtualClassroom]),
    typeorm_1.OneToMany(() => VirtualClassroom_1.VirtualClassroom, classroom => classroom.course),
    __metadata("design:type", Array)
], Course.prototype, "classrooms", void 0);
__decorate([
    type_graphql_2.Field(() => String),
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Course.prototype, "name", void 0);
__decorate([
    type_graphql_2.Field(() => type_graphql_1.Float),
    typeorm_1.Column({ type: "float" }),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    type_graphql_2.Field(() => Boolean),
    typeorm_1.Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Course.prototype, "active", void 0);
__decorate([
    type_graphql_2.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], Course.prototype, "createdAt", void 0);
__decorate([
    type_graphql_2.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], Course.prototype, "updatedAt", void 0);
Course = __decorate([
    type_graphql_2.ObjectType(),
    typeorm_1.Entity()
], Course);
exports.Course = Course;
