import "reflect-metadata";

import { FacebookUser } from './entities/FacebookUser';
import { ApolloServer } from 'apollo-server-express';
import { User } from './entities/User';

import express from 'express';
import session, { Cookie } from 'express-session';

//OAuth2
import passport from 'passport';
import * as FacebookStrategy from 'passport-facebook';

//Middleware
import cors from 'cors';
import argon2 from 'argon2'

import FileStore from 'session-file-store';
import { buildSchema } from 'type-graphql';
import { createConnection } from "typeorm";

// Resolvers
import { UserResolver } from './resolvers/UserResolver';

// Configs
import ormConfig from './config/orm.config';
import fileStoreConfig from "./config/file-store.config";
import { createTokens } from "./auth";

const crypto = require('crypto');

const main = async () => {

    const conn = await createConnection(ormConfig);

    // Conectar a DB y correr migraciones
    // const orm = await MikroORM.init(microConfig);
    // await orm.getMigrator().up();

    // Iniciar Server ExpressJS
    const app = express();


    passport.use(new FacebookStrategy.Strategy({
        clientID: "471175010576407",
        clientSecret: "c061c9c973e44e932633ec6f3b01cc15",
        callbackURL: "http://localhost:8080/auth/facebook/callback",
    }, async (accessToken, refreshToken, profile, done) => {
        
        const {id, displayName} = profile;
        const fbusers = await FacebookUser.findOne({where: {facebook: id}})

        if(!fbusers){
            const hash = await argon2.hash(crypto.randomBytes(4));
            const user = await User.create({name: displayName, password:hash});
            user.save();
            
            const fbuser = new FacebookUser()
            fbuser.user = user;
            fbuser.facebook = id;
            fbuser.save();
            done(null, fbuser)
        } else{
            done(null, fbusers)
        }
        
    }));

    passport.serializeUser(function(user : any, done) {
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id : any, done) {
        console.log(id)
        User.findByIds(id);
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
            resolvers: [UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res })
    });

    // Iniciar GraphQL, puedes ir a localhost:PUERTO/graphql 
    // para entrar en el sandbox
    apollo.applyMiddleware({ app, cors: false });

    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        session: true}),  async (req, res, next) => {
        
        res.redirect(`http://localhost:8080`)
    });

    // ExpressJS escucha en este puerto
    app.listen(8080, () => {

    })

    app.listen(80, () => {

    })  
}

main().catch((err) => {
    console.error(err);
});