
import express from 'express';
import microConfig from './config/micro-orm.config'
import { MikroORM,} from '@mikro-orm/core';
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

const main = async () => {
    // Conectar a DB y correr migraciones
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    // Iniciar Server
    const app = express();

    // Server Graphql
    const apollo = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false,
        }),
        context: () => ({em: orm.em})
    });

    apollo.applyMiddleware({app});

    app.listen(8080, () =>{

    })
}
 
main().catch((err) => {
    console.error(err);
});