import { Language } from './../entities/Language';
import { define, factory } from 'typeorm-seeding';
import * as Faker from 'faker';

define(Language, (faker : typeof Faker) => {
    const language = new Language();
    
    language.code = faker.random.word();
    language.name = 'Inglés';

    return language;
})