import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum UserRole { // Define user roles
    CLIENT = 'client',
    ADMIN = 'admin',
};

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn('uuid') // Primary key as UUID
    id:string;

    @Column({length:150})
    name:string;

    @Column({length:150, unique:true})
    email:string;

    @Column({length:150, unique: true})
    password:string;

    @Column({ type: 'varchar', default: UserRole.CLIENT})
    role: UserRole;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}