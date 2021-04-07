import { define, factory } from 'typeorm-seeding';

import * as Faker from 'faker';
import { Teacher } from '../entities/Teacher';
import { User } from '../entities/User';

define(Teacher, (faker : typeof Faker) => {
    const teacher = new Teacher();

    teacher.user = factory(User)() as any;

    return teacher;
})