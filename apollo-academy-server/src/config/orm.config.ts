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

export default {
    type: 'mysql',
    database: 'apolloacademy',
    username: 'root',
    password: '',
    logging: true,
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
    ]
} as Parameters<typeof typeorm.createConnection>[0];