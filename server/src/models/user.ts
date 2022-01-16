import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import Group from "./group";
import Board from './board'
@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    firstname: string;

    @Column({ length: 50 })
    lastname: string;

    @Column({ length: 50 })
    email: string;

    @Column()
    password: string;

    @Column()
    isVerified: boolean;

    @Column()
    avatar: string;

    @OneToMany(() => Group, group => group.admin)
    groupsHeCreated: Group[]


    @OneToMany(() => Board, (board: Board) => board.user)
    boards: Board[]


    // groupsHeJoined: []

}

export default User