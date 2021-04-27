"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entities/User");
exports.default = {
    type: 'mysql',
    database: 'apolloacademy',
    username: 'root',
    password: '',
    logging: true,
    synchronize: true,
    entities: [User_1.User]
};
