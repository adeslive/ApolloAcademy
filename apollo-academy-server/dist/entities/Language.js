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
exports.Language = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Language = class Language extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Language.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Language.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], Language.prototype, "code", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean, { defaultValue: true }),
    typeorm_1.Column({ type: "boolean" }),
    __metadata("design:type", Boolean)
], Language.prototype, "active", void 0);
Language = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Language);
exports.Language = Language;
