import { define } from 'typeorm-seeding';
import { User } from "../entities/User";
import * as Faker from 'faker';

define(User, (faker : typeof Faker) => {
    const user = new User();

    user.name = faker.name.firstName();
    user.email = faker.internet.email();
    user.password = faker.random.alphaNumeric(8);

    return user;
})