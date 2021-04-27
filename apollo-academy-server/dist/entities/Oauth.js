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
exports.Oauth = void 0;
const User_1 = require("./User");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Oauth = class Oauth extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Oauth.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User),
    typeorm_1.OneToOne(() => User_1.User, user => user.oauth),
    __metadata("design:type", User_1.User)
], Oauth.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], Oauth.prototype, "remote_id", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Oauth.prototype, "active", void 0);
Oauth = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Oauth);
exports.Oauth = Oauth;
