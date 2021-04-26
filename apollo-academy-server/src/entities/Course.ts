import { Float } from 'type-graphql';
import { VirtualClassroom } from './VirtualClassroom';
import { Language } from './Language';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Course extends BaseEntity {
    
    @Field(() => ID, {nullable: true})
    @PrimaryGeneratedColumn()
    id! : number

    @Field(() => Language)
    @OneToOne(() => Language)
    @JoinColumn()
    language!: Language;

    @Field(() => [VirtualClassroom])
    @OneToMany(() => VirtualClassroom, classroom => classroom.course)
    classrooms!: VirtualClassroom[];

    @Field(() => String)
    @Column({type: "varchar"})
    name!: string;

    @Field(() => Float)
    @Column({type: "float"})
    price!: number;

    @Field(() => Boolean)
    @Column({type:"boolean", default: true})
    active!: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @CreateDateColumn()
    updatedAt = new Date();
}