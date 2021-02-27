import { VirtualClassroom } from './VirtualClassroom';
import { Language } from './Language';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';


@Entity()
export class Course extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id! : number

    @OneToOne(() => Language)
    @JoinColumn()
    language!: Language;

    @OneToMany(() => VirtualClassroom, classroom => classroom.course)
    classrooms!: VirtualClassroom;

    @Column({type: "varchar"})
    name!: string;

    @Column({type: "varchar"})
    description!: string;

    @Column({type:"boolean"})
    active!: boolean;

    @CreateDateColumn()
    createdAt = new Date();

    @CreateDateColumn()
    updatedAt = new Date();
}