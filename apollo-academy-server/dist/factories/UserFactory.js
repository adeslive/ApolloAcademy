"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const User_1 = require("../entities/User");
typeorm_seeding_1.define(User_1.User, (faker) => {
    const user = new User_1.User();
    user.name = faker.name.firstName();
    user.email = faker.internet.email();
    user.password = faker.random.alphaNumeric(8);
    return user;
});
