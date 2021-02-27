import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Language extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:"varchar"})
    name!:string;

    @Column({type:"varchar"})
    code!:string;

    @Column({type:"boolean"})
    active!: boolean;
}