"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VirtualClassroom_1 = require("./../entities/VirtualClassroom");
const Teacher_1 = require("./../entities/Teacher");
const Student_1 = require("./../entities/Student");
const Coordinator_1 = require("./../entities/Coordinator");
const User_1 = require("../entities/User");
const Oauth_1 = require("../entities/Oauth");
const Course_1 = require("../entities/Course");
const Language_1 = require("../entities/Language");
const Receipt_1 = require("../entities/Receipt");
const path_1 = __importDefault(require("path"));
exports.default = {
    type: 'mysql',
    host: 'database-1.ckqzhwm1hfv8.us-east-2.rds.amazonaws.com',
    database: 'apolloacademy',
    username: 'admin',
    password: 'WtsSq3tWnBXMnCP6Girj',
    logging: false,
    synchronize: true,
    entities: [
        User_1.User,
        Oauth_1.Oauth,
        Course_1.Course,
        Language_1.Language,
        Coordinator_1.Coordinator,
        Course_1.Course,
        Student_1.Student,
        Teacher_1.Teacher,
        Receipt_1.Receipt,
        VirtualClassroom_1.VirtualClassroom
    ],
    seeds: [path_1.default.join(__dirname, '../seeds/**/*{.ts,.js}')],
    factories: [path_1.default.join(__dirname, '../factories/**/*{.ts,.js}')],
};
