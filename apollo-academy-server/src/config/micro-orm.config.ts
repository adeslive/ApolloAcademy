import { MikroORM } from '@mikro-orm/core';
import { User } from '../entities/User';
import path from 'path';

export default {
    migrations: {
        path: path.join( __dirname, './../migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    entities: [User],
    dbName: "apollo",
    type: "mysql",
    user: "root",
    password: "",
    debug: true,
} as Parameters<typeof MikroORM.init>[0];