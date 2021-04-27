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
exports.ReceiptResolver = void 0;
const Receipt_1 = require("./../entities/Receipt");
const type_graphql_1 = require("type-graphql");
let ReceiptResolver = class ReceiptResolver {
    myreceipts({ req }) {
        return Receipt_1.Receipt.createQueryBuilder("receipt")
            .leftJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .where('receipt.paid = 1')
            .andWhere("receipt.id IS NOT NULL")
            .getMany();
    }
    receipt(id, { req }) {
        return Receipt_1.Receipt.createQueryBuilder("receipt")
            .leftJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
            .leftJoinAndSelect("receipt.virtual", "classroom")
            .leftJoinAndSelect("classroom.course", "course")
            .leftJoinAndSelect("course.language", "language")
            .leftJoinAndSelect("classroom.teacher", "teacher")
            .leftJoinAndSelect("teacher.user", "user")
            .where('receipt.paid = 1')
            .andWhere("receipt.id = :id", { id: id })
            .getOne();
    }
};
__decorate([
    type_graphql_1.Query(() => [Receipt_1.Receipt]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReceiptResolver.prototype, "myreceipts", null);
__decorate([
    type_graphql_1.Mutation(() => Receipt_1.Receipt),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ReceiptResolver.prototype, "receipt", null);
ReceiptResolver = __decorate([
    type_graphql_1.Resolver()
], ReceiptResolver);
exports.ReceiptResolver = ReceiptResolver;
