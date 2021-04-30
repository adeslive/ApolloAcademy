"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Language_1 = require("./../entities/Language");
const typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(Language_1.Language, (faker) => {
    const language = new Language_1.Language();
    language.code = faker.random.word();
    language.name = 'Inglés';
    return language;
});
