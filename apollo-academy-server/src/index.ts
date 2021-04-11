import { ReceiptResolver } from './resolvers/ReceiptResolver';
import { ApolloServer } from 'apollo-server-express';
import argon2 from 'argon2';
//Middleware
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import * as nodemailer from 'nodemailer';
//OAuth2
import passport from 'passport';
import * as FacebookStrategy from 'passport-facebook';
import * as GoogleStrategy from 'passport-google-oauth';
import "reflect-metadata";
import FileStore from 'session-file-store';
import Stripe from 'stripe';
import { buildSchema } from 'type-graphql';
import { createConnection } from "typeorm";
import fileStoreConfig from "./config/file-store.config";
// Configs
import ormConfig from './config/orm.config';
import { Oauth } from './entities/Oauth';
import { User } from './entities/User';
import { ClasroomResolver } from './resolvers/ClassroomResolver';
import { CourseResolver } from './resolvers/CourseResolver';
import { PaymentResolver } from "./resolvers/PaymentResolver";
import { TeacherResolver } from './resolvers/TeacherResolver';
// Resolvers
import { UserResolver } from './resolvers/UserResolver';

const crypto = require('crypto');

const main = async () => {

    const conn = await createConnection(ormConfig);

    const stripe = new Stripe(
        'sk_test_51IVNrmI4W0jH35I3rLh5iSYigztvWY2yzGtudpkL6V0WXx5KhXBaO2ltuv1poTrvaeJACOUgflsNJqFjeQ4aV9UE00bhYAyvwH',
        {
            apiVersion: '2020-08-27',
            typescript: true
        }
    );

    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "apolloacademyedu@gmail.com", // generated ethereal user
            pass: "_No_More_Heroes091!", // generated ethereal password
        },
    });

    // Iniciar Server ExpressJS
    const app = express();

    passport.use(new GoogleStrategy.OAuth2Strategy({
        clientID: "884136061002-v6u64o0fgocg8c4v16tvkfnpidv6le3u.apps.googleusercontent.com",
        clientSecret: "2AchozudAaVa6ftf_cKbLEtg",
        callbackURL: "http://localhost:8080/google/callback",
    }, async (accessToken, refreshToken, profile, done) => {

        const { id, displayName } = profile;
        const googleUsers = await Oauth.findOne({ remote_id: id });

        if (!googleUsers) {
            const hash = await argon2.hash(crypto.randomBytes(4));

            const guser = new Oauth();
            guser.remote_id = id;
            guser.save();

            const user = new User();
            user.name = displayName;
            user.password = hash;
            user.oauth = guser;
            user.save();

            done(null, guser)
        } else {
            done(null, googleUsers)
        }
    }));

    passport.use(new FacebookStrategy.Strategy({
        clientID: "471175010576407",
        clientSecret: "c061c9c973e44e932633ec6f3b01cc15",
        callbackURL: "http://localhost:8080/auth/facebook/callback",
    }, async (accessToken, refreshToken, profile, done) => {

        const { id, displayName } = profile;
        const fbusers = await Oauth.findOne({ where: { remote_id: id } })

        if (!fbusers) {
            const hash = await argon2.hash(crypto.randomBytes(4));

            const fbuser = new Oauth();
            fbuser.remote_id = id;
            fbuser.save();

            const user = new User();
            user.name = displayName;
            user.password = hash;
            user.oauth = fbuser;
            user.save();

            done(null, fbuser)
        } else {
            done(null, fbusers)
        }

    }));

    passport.serializeUser(function (user: any, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user: any, done) {
        done(null, user);
    });

    app.use(passport.initialize())
    app.use(passport.session());

    // Remplazar origin para el CORS si es necesario
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    // Sesiones
    // TO DO Cambiar a OAuth2
    const fileStore = FileStore(session);
    app.use(session({
        name: "aid",
        store: new fileStore(fileStoreConfig),
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
    const apollo = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                UserResolver, PaymentResolver, CourseResolver, ClasroomResolver, TeacherResolver, ReceiptResolver
            ],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res, transport, stripe })
    });

    // Iniciar GraphQL, puedes ir a localhost:PUERTO/graphql 
    // para entrar en el sandbox
    apollo.applyMiddleware({ app, cors: false });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        session: true
    }), async (req, res, next) => {
        res.redirect(`http://localhost:3000/home`)
    });

    app.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
    app.get('/google/callback', passport.authenticate('google', {
        session: true
    }), async (req, res, next) => {
        res.redirect(`http://localhost:3000/home`)
    });

    // ExpressJS escucha en este puerto
    app.listen(8080, () => {

    })
}

main().catch((err) => {
    console.error(err);
});