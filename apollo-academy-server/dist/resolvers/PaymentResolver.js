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
exports.PaymentResolver = void 0;
const User_1 = require("./../entities/User");
const VirtualClassroom_1 = require("./../entities/VirtualClassroom");
const type_graphql_1 = require("type-graphql");
const types_1 = require("../types");
const Receipt_1 = require("../entities/Receipt");
const crypto_1 = require("crypto");
const Oauth_1 = require("../entities/Oauth");
let PaymentResolver = class PaymentResolver {
    getPayments({ req, stripe }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne(req.session.userID);
            return {};
        });
    }
    createCheckout(classID, { req, stripe, transport }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const classroom = yield VirtualClassroom_1.VirtualClassroom.findOne({ relations: ["course"], where: { id: classID } });
            let user = null;
            if (req.session.userID) {
                user = yield User_1.User.findOne({ id: req.session.userID });
            }
            else if ((_a = req.session.passport) === null || _a === void 0 ? void 0 : _a.user) {
                /*
                return User
                .createQueryBuilder("user")
                .innerJoinAndSelect("user.oauth", "oauth")
                .where("oauth.remote_id = :id", { id: req.session.passport.user.remote_id })
                .getOne();*/
                const oauth = yield Oauth_1.Oauth.findOne({ where: { remote_id: (_b = req.session.passport) === null || _b === void 0 ? void 0 : _b.user.remote_id } });
                if (oauth) {
                    user = yield User_1.User.findOne({ where: { oauth: oauth.id } });
                }
            }
            if (!classroom || !user) {
                return {
                    errors: [{
                            field: "general",
                            message: "There was an error at checkout, please come back later"
                        }]
                };
            }
            if (user.stripe_customer === '') {
                const customer = yield stripe.customers.create({
                    email: user.email ? user.email : undefined
                });
                user.stripe_customer = customer.id;
                yield user.save();
            }
            let receipt = yield Receipt_1.Receipt.createQueryBuilder("receipt")
                .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
                .leftJoin("receipt.virtual", "classroom")
                .where('classroom.id = :id', { id: classID })
                .andWhere('receipt.paid = 1')
                .andWhere("receipt.id IS NOT NULL")
                .getOne();
            if (!receipt) {
                receipt = new Receipt_1.Receipt();
                const codigo = crypto_1.randomBytes(16).toString('hex');
                receipt.user = user;
                receipt.amount = classroom === null || classroom === void 0 ? void 0 : classroom.course.price;
                receipt.virtual = classID;
                receipt.key = codigo;
                yield receipt.save();
            }
            const session = yield stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                customer: user.stripe_customer ? user.stripe_customer : undefined,
                mode: 'payment',
                line_items: [{
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: classroom.course.name
                            },
                            unit_amount: classroom.course.price * 100,
                        },
                        quantity: 1
                    }],
                success_url: `http://localhost/pay/${receipt.id}?key=${receipt.key}`,
                cancel_url: 'http://localhost/pay/-1'
            });
            return { stripeID: session.id };
        });
    }
    pay(id, key, { req, stripe, transport }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const receipt = yield Receipt_1.Receipt.findOneOrFail(id);
            if (key == receipt.key) {
                receipt.paid = true;
                let user = null;
                if (req.session.userID) {
                    user = yield User_1.User.findOne({ id: req.session.userID });
                }
                else if ((_a = req.session.passport) === null || _a === void 0 ? void 0 : _a.user) {
                    /*
                    return User
                    .createQueryBuilder("user")
                    .innerJoinAndSelect("user.oauth", "oauth")
                    .where("oauth.remote_id = :id", { id: req.session.passport.user.remote_id })
                    .getOne();*/
                    const oauth = yield Oauth_1.Oauth.findOne({ where: { remote_id: (_b = req.session.passport) === null || _b === void 0 ? void 0 : _b.user.remote_id } });
                    if (oauth) {
                        user = yield User_1.User.findOne({ where: { oauth: oauth.id } });
                    }
                }
                console.log(user);
                if (user != null && user != undefined) {
                    try {
                        let mail = yield transport.sendMail({
                            from: '"Apollo Academy" <apolloacademyedu@gmail.com>',
                            to: user.email,
                            subject: "ApolloAcademy - Bienvenido al curso",
                            text: "Bienvenido",
                            html: `<div style="margin: 4rem; background-color: LightGray; text-align: center; height: 500px">
                        <div style="">
                          <h1>Primero que nada gracias por todo</h1>
                          <div style="background-color: white; margin: 0 4rem 4rem 4rem; height:400px">
                            <div style="padding-top: 4rem">
                              <h2> ${user.name} te damos la bienvenida al curso</h2>
                              <p>Si tu no fuiste quien matriculo el curso, por favor ponte en contacto con este correo</p></p>
                            </div>
                            <div style="display: flex; margin: 4rem 10rem 0 10rem">
                              
                            </div>
                          </div>
                        </div>
                      </div>`,
                        });
                    }
                    catch (e) {
                    }
                }
                receipt.save();
                return {
                    receipt
                };
            }
            return {
                errors: [{
                        field: "general",
                        message: "Error"
                    }]
            };
        });
    }
    isPaid(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let receipt = null;
            receipt = Receipt_1.Receipt.createQueryBuilder("receipt")
                .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
                .leftJoin("receipt.virtual", "classroom")
                .where('classroom.id = :id', { id: id })
                .andWhere('receipt.paid = 1')
                .andWhere("receipt.id IS NOT NULL")
                .getOne();
            if (yield receipt)
                return true;
            else {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "getPayments", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('classroom', () => type_graphql_1.ID)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "createCheckout", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('classroom', () => type_graphql_1.ID)),
    __param(1, type_graphql_1.Arg('key', () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "pay", null);
__decorate([
    type_graphql_1.Query(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "isPaid", null);
PaymentResolver = __decorate([
    type_graphql_1.Resolver()
], PaymentResolver);
exports.PaymentResolver = PaymentResolver;
