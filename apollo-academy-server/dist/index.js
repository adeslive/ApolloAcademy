"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const ReceiptResolver_1 = require("./resolvers/ReceiptResolver");
const apollo_server_express_1 = require("apollo-server-express");
const argon2_1 = __importDefault(require("argon2"));
//Middleware
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const nodemailer = __importStar(require("nodemailer"));
//OAuth2
const passport_1 = __importDefault(require("passport"));
const FacebookStrategy = __importStar(require("passport-facebook"));
const GoogleStrategy = __importStar(require("passport-google-oauth"));
require("reflect-metadata");
const session_file_store_1 = __importDefault(require("session-file-store"));
const stripe_1 = __importDefault(require("stripe"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const file_store_config_1 = __importDefault(require("./config/file-store.config"));
// Configs
const orm_config_1 = __importDefault(require("./config/orm.config"));
const Oauth_1 = require("./entities/Oauth");
const User_1 = require("./entities/User");
const ClassroomResolver_1 = require("./resolvers/ClassroomResolver");
const CourseResolver_1 = require("./resolvers/CourseResolver");
const PaymentResolver_1 = require("./resolvers/PaymentResolver");
const TeacherResolver_1 = require("./resolvers/TeacherResolver");
// Resolvers
const UserResolver_1 = require("./resolvers/UserResolver");
const crypto = require('crypto');
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield typeorm_1.createConnection(orm_config_1.default);
    const stripe = new stripe_1.default('sk_test_51IVNrmI4W0jH35I3rLh5iSYigztvWY2yzGtudpkL6V0WXx5KhXBaO2ltuv1poTrvaeJACOUgflsNJqFjeQ4aV9UE00bhYAyvwH', {
        apiVersion: '2020-08-27',
        typescript: true
    });
    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "apolloacademyedu@gmail.com",
            pass: "yookyjsawyaafxwb",
        },
    });
    // Iniciar Server ExpressJS
    const app = express_1.default();
    passport_1.default.use(new GoogleStrategy.OAuth2Strategy({
        clientID: "884136061002-v6u64o0fgocg8c4v16tvkfnpidv6le3u.apps.googleusercontent.com",
        clientSecret: "2AchozudAaVa6ftf_cKbLEtg",
        callbackURL: "http://18.189.235.128:8080/google/callback",
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, displayName } = profile;
        const googleUsers = yield Oauth_1.Oauth.findOne({ remote_id: id });
        if (!googleUsers) {
            const hash = yield argon2_1.default.hash(crypto.randomBytes(4));
            const guser = new Oauth_1.Oauth();
            guser.remote_id = id;
            guser.save();
            const user = new User_1.User();
            user.name = displayName;
            user.password = hash;
            user.oauth = guser;
            user.save();
            done(null, guser);
        }
        else {
            done(null, googleUsers);
        }
    })));
    passport_1.default.use(new FacebookStrategy.Strategy({
        clientID: "471175010576407",
        clientSecret: "c061c9c973e44e932633ec6f3b01cc15",
        callbackURL: "http://18.189.235.128:8080/auth/facebook/callback",
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, displayName } = profile;
        const fbusers = yield Oauth_1.Oauth.findOne({ where: { remote_id: id } });
        if (!fbusers) {
            const hash = yield argon2_1.default.hash(crypto.randomBytes(4));
            const fbuser = new Oauth_1.Oauth();
            fbuser.remote_id = id;
            fbuser.save();
            const user = new User_1.User();
            user.name = displayName;
            user.password = hash;
            user.oauth = fbuser;
            user.save();
            done(null, fbuser);
        }
        else {
            done(null, fbusers);
        }
    })));
    passport_1.default.serializeUser(function (user, done) {
        done(null, user);
    });
    passport_1.default.deserializeUser(function (user, done) {
        done(null, user);
    });
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    // Remplazar origin para el CORS si es necesario
    app.use(cors_1.default({
        origin: 'http://18.189.235.128',
        credentials: true
    }));
    // Sesiones
    // TO DO Cambiar a OAuth2
    const fileStore = session_file_store_1.default(express_session_1.default);
    app.use(express_session_1.default({
        name: "aid",
        store: new fileStore(file_store_config_1.default),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            sameSite: 'lax',
            secure: false // True en https
        },
        secret: "This secret needs to be changed",
        resave: false,
        saveUninitialized: false
    }));
    // Server Graphql
    const apollo = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [
                UserResolver_1.UserResolver, PaymentResolver_1.PaymentResolver, CourseResolver_1.CourseResolver, ClassroomResolver_1.ClasroomResolver, TeacherResolver_1.TeacherResolver, ReceiptResolver_1.ReceiptResolver
            ],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, transport, stripe })
    });
    // Iniciar GraphQL, puedes ir a 18.189.235.128:PUERTO/graphql 
    // para entrar en el sandbox
    apollo.applyMiddleware({ app, cors: false });
    app.get('/auth/facebook', passport_1.default.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', {
        session: true
    }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        res.redirect(`http://18.189.235.128/home`);
    }));
    app.get('/google', passport_1.default.authenticate('google', { scope: ['email', 'profile'] }));
    app.get('/google/callback', passport_1.default.authenticate('google', {
        session: true
    }), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        res.redirect(`http://18.189.235.128/home`);
    }));
    // ExpressJS escucha en este puerto
    app.listen(8080, () => {
    });
});
main().catch((err) => {
    console.error(err);
});
