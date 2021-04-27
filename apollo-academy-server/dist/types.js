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
exports.CResponse = exports.ErrorField = void 0;
const User_1 = require("./entities/User");
const type_graphql_1 = require("type-graphql");
const Receipt_1 = require("./entities/Receipt");
let ErrorField = class ErrorField {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ErrorField.prototype, "field", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ErrorField.prototype, "message", void 0);
ErrorField = __decorate([
    type_graphql_1.ObjectType()
], ErrorField);
exports.ErrorField = ErrorField;
let CResponse = class CResponse {
};
__decorate([
    type_graphql_1.Field(() => [ErrorField], { nullable: true }),
    __metadata("design:type", Array)
], CResponse.prototype, "errors", void 0);
__decorate([
    type_graphql_1.Field(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], CResponse.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], CResponse.prototype, "stripeID", void 0);
__decorate([
    type_graphql_1.Field(() => Receipt_1.Receipt, { nullable: true }),
    __metadata("design:type", Receipt_1.Receipt)
], CResponse.prototype, "receipt", void 0);
CResponse = __decorate([
    type_graphql_1.ObjectType()
], CResponse);
exports.CResponse = CResponse;
