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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const VirtualClassroom_1 = require("./../entities/VirtualClassroom");
const Oauth_1 = require("./../entities/Oauth");
const argon2_1 = __importDefault(require("argon2"));
const type_graphql_1 = require("type-graphql");
const types_1 = require("../types");
const User_1 = require("./../entities/User");
const crypto_1 = require("crypto");
// Verifican email y contraseña
const emailT = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
const passNumT = /^([^\.]|[]).+[0-9]*([^\.]|$)/g;
// TO DO Mover a otro archivo
let UserResolver = class UserResolver {
    verifyLogin({ req }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.userID) {
                return User_1.User.findOne({ id: req.session.userID });
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
                    return User_1.User.findOne({ where: { oauth: oauth.id } });
                }
            }
            return null;
        });
    }
    users() {
        return User_1.User.find();
    }
    user(id) {
        return User_1.User.findOne(id);
    }
    getCode(email, { req, transport }) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigo = crypto_1.randomBytes(2).toString('hex');
            const user = yield User_1.User.findOne({ where: { email: email } });
            if (!user) {
                return {
                    errors: [{
                            field: "email",
                            message: "El usuario no existe"
                        }]
                };
            }
            yield transport.sendMail({
                from: '"Apollo Academy" <apolloacademyedu@gmail.com>',
                to: email,
                subject: "ApolloAcademy - Recuperar contraseña",
                text: codigo,
                html: `<b>Codigo: ${codigo}</b>`,
            });
            user.password_reset = codigo;
            user.save();
            return { user };
        });
    }
    restore(code, email, { req, stripe }) {
        return __awaiter(this, void 0, void 0, function* () {
            // TO DO cambiar codigo, generar numeros
            const user = yield User_1.User.findOne({ where: { email: email } });
            if (user && user.password_reset == code) {
                user.password_reset = "-1";
                user.save();
                return { user };
            }
            return {
                errors: [{
                        field: "code",
                        message: "El codigo es incorrecto"
                    }]
            };
        });
    }
    changePassword(email, password, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!password || password.length < 8 || !passNumT.test(password)) {
                return {
                    errors: [{
                            field: "password",
                            message: "La contraseña debe de tener al menos 8 digitos y 1 numero"
                        }]
                };
            }
            // TO DO cambiar codigo, generar numeros
            const user = yield User_1.User.findOne({ where: { email: email, password_reset: "-1" } });
            if (user) {
                user.password = yield argon2_1.default.hash(password);
                user.password_reset = "";
                user.save();
                return { user };
            }
            return {
                errors: [{
                        field: "email",
                        message: "El usuario no existe"
                    }]
            };
        });
    }
    register(name, email, password, { req, transport }) {
        return __awaiter(this, void 0, void 0, function* () {
            let errors = [];
            if (!email || !emailT.test(email)) {
                errors.push({
                    field: "email",
                    message: "El correo es invalido"
                });
            }
            if (!password || password.length < 8 || !passNumT.test(password)) {
                errors.push({
                    field: "password",
                    message: "La contraseña debe de tener al menos 8 digitos y 1 numero"
                });
            }
            if (errors.length > 0) {
                return { errors };
            }
            const hash = yield argon2_1.default.hash(password);
            const user = User_1.User.create({ email: email, name: name, password: hash });
            try {
                yield user.save();
            }
            catch (error) {
                if (error.code == "ER_DUP_ENTRY") {
                    return {
                        errors: [
                            {
                                field: "email",
                                message: "Este correo ya está registrado"
                            }
                        ]
                    };
                }
            }
            ;
            // Envia cookie para iniciar sesion al registrarse
            req.session.userID = user.id;
            try {
                yield transport.sendMail({
                    from: '"Apollo Academy" <apolloacademyedu@gmail.com>',
                    to: email,
                    subject: "ApolloAcademy - Bienvenido",
                    text: "Bienvenido",
                    html: `<div style="margin: 4rem; background-color: LightGray; text-align: center; height: 500px">
                <div style="">
                  <h1>Bienvenido/a a ApolloAcademy</h1>
                  <div style="background-color: white; margin: 0 4rem 4rem 4rem; height:400px">
                    <div style="padding-top: 4rem">
                      <h2> ${user.name} te damos la bienvenida a Apollo Academy</h2>
                      <p>Para ingresar a nuestra aplicación puedes ingresar en el siguiente enlace: <a href="https://localhost" target="_blank">Apollo Academy</a></p>
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
            return { user };
        });
    }
    // TO DO Refactor
    /*@Mutation(() => User)
    async updateUser(
        @Arg('id', () => ID) id: number,
        @Arg('name', () => String, { nullable: true }) name: string,
        @Arg('email', () => String, { nullable: true }) email: string,
        @Arg('password', () => String, { nullable: true }) password: string
    ): Promise<User | undefined> {
        const hash = await argon2.hash(password);
        const user = await User.findOne({ id });
        
        if (typeof name !== undefined) { user.name = name }
        if (typeof email !== undefined) { user.email = email }
        if (typeof password !== undefined) { user.password = hash }

        await em.persistAndFlush(user);

        return user;
    }*/
    login(email, password, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email: email } });
            if (!user) {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "El usuario no existe"
                        }
                    ]
                };
            }
            const valid = yield argon2_1.default.verify(user.password, password);
            if (!valid) {
                return {
                    errors: [
                        {
                            field: "password",
                            message: "La contraseña es incorrecta"
                        }
                    ]
                };
            }
            req.session.userID = user.id;
            return {
                user
            };
        });
    }
    logout({ req, res }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(response => req.session.destroy(err => {
                if (err) {
                    console.error(err);
                    response(false);
                    return;
                }
                res.clearCookie("aid");
                response(true);
            }));
        });
    }
    classroomdates({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let dates = [];
            const classrooms = yield VirtualClassroom_1.VirtualClassroom.createQueryBuilder("classroom")
                .innerJoinAndSelect("classroom.teacher", "teacher")
                .innerJoinAndSelect("teacher.user", "user")
                .innerJoinAndSelect("receipt", "receipt", "receipt.virtual = classroom.id ")
                .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
                .where("classroom.enable = 1")
                .andWhere('receipt.paid = 1')
                .andWhere("receipt.id IS NOT NULL")
                .getMany();
            classrooms.forEach((value, index) => {
                for (let i = 0; i < value.repeat + 1; i++) {
                    let date = new Date();
                    date.setDate(value.time_start.getDate() + i * 7);
                    dates.push(date);
                }
            });
            return dates;
        });
    }
    activities(dateToCheck, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            let date = new Date(dateToCheck.getFullYear(), dateToCheck.getMonth(), dateToCheck.getDate());
            let result = [];
            const classrooms = yield VirtualClassroom_1.VirtualClassroom.createQueryBuilder("classroom")
                .innerJoinAndSelect("classroom.teacher", "teacher")
                .innerJoinAndSelect("classroom.course", "course")
                .innerJoinAndSelect("teacher.user", "user")
                .innerJoinAndSelect("receipt", "receipt", "receipt.virtual = classroom.id ")
                .innerJoinAndSelect("receipt.user", "payer", "payer.id = :id", { id: req.session.userID })
                .where("classroom.enable = 1")
                .andWhere('receipt.paid = 1')
                .andWhere("receipt.id IS NOT NULL")
                .getMany();
            classrooms.forEach((value, index) => {
                for (let i = 0; i < value.repeat + 1; i++) {
                    let endDate = new Date(value.time_start.getFullYear(), value.time_start.getMonth(), value.time_start.getDate());
                    let startDate = new Date(value.time_start.getFullYear(), value.time_start.getMonth(), value.time_start.getDate());
                    startDate.setDate(value.time_start.getDate() + i * 7);
                    endDate.setDate(value.time_start.getDate() + i * 7 + 1);
                    if (date >= startDate && date < endDate) {
                        result.push(value);
                        break;
                    }
                }
            });
            return result;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "verifyLogin", null);
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Query(() => User_1.User),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('email', () => String)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getCode", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('code', () => String)),
    __param(1, type_graphql_1.Arg('email', () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "restore", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('email', () => String)),
    __param(1, type_graphql_1.Arg('password', () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changePassword", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('name', () => String)),
    __param(1, type_graphql_1.Arg('email', () => String)),
    __param(2, type_graphql_1.Arg('password', () => String)),
    __param(3, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => types_1.CResponse),
    __param(0, type_graphql_1.Arg('email', () => String)),
    __param(1, type_graphql_1.Arg('password', () => String)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
__decorate([
    type_graphql_1.Query(() => [Date]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "classroomdates", null);
__decorate([
    type_graphql_1.Mutation(() => [VirtualClassroom_1.VirtualClassroom]),
    __param(0, type_graphql_1.Arg('date', () => Date)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "activities", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
