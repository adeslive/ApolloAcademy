import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Teacher } from './../entities/Teacher';
import { Student } from './../entities/Student';
import { Coordinator } from './../entities/Coordinator';
import typeorm from 'typeorm';
import { User } from '../entities/User';
import { Oauth } from '../entities/Oauth';
import { Course } from '../entities/Course';
import { Language } from '../entities/Language';
import { Receipt } from '../entities/Receipt';
import path from 'path';

export default {
    type: 'mariadb',
    database: 'apolloacademy',
    username: 'root',
    password: '',
    logging: false,
    synchronize: true,
    entities: [
        User, 
        Oauth, 
        Course, 
        Language, 
        Coordinator, 
        Course,
        Student, 
        Teacher,
        Receipt,
        VirtualClassroom
    ],
    seeds: [path.join( __dirname,'../seeds/**/*{.ts,.js}')],
    factories: [path.join( __dirname,'../factories/**/*{.ts,.js}')],
} as Parameters<typeof typeorm.createConnection>[0];