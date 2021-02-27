import { VirtualClassroom } from './../entities/VirtualClassroom';
import { Teacher } from './../entities/Teacher';
import { Student } from './../entities/Student';
import { Coordinator } from './../entities/Coordinator';
import typeorm from 'typeorm';
import { User } from '../entities/User';
import { FacebookUser } from '../entities/FacebookUser';
import { Course } from '../entities/Course';
import { Language } from '../entities/Language';

export default {
    type: 'mysql',
    database: 'apolloacademy',
    username: 'root',
    password: '',
    logging: true,
    synchronize: true,
    entities: [
        User, 
        FacebookUser, 
        Course, 
        Language, 
        Coordinator, 
        Course, 
        FacebookUser, 
        Student, 
        Teacher,
        VirtualClassroom
    ]
} as Parameters<typeof typeorm.createConnection>[0];