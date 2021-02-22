import "reflect-metadata";
import express from 'express';
import session from 'express-session';
import FileStore from 'session-file-store'
import microConfig from './config/micro-orm.config'
import { MikroORM,} from '@mikro-orm/core';
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';
import fileStoreConfig from "./config/file-store.config";
import cors from 'cors';

const main = async () => {
    // Conectar a DB y correr migraciones
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    // Iniciar Server ExpressJS
    const app = express();

    // Remplazar origin para el CORS si es necesario
    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true
    }))

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
    }))

    // Server Graphql
    const apollo = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false,
        }),
        context: ({req, res}) => ({em: orm.em, req, res})
    });

    // Iniciar GraphQL, puedes ir a localhost:PUERTO/graphql 
    // para entrar en el sandbox
    apollo.applyMiddleware({app, cors: false});

    // ExpressJS escucha en este puerto
    app.listen(8080, () =>{

    })
}
 
main().catch((err) => {
    console.error(err);
});