import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import Group from "./group";

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    firstname: string;

    @Column({ length: 50 })
    lastname: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    isVerified: boolean;

    @Column()
    avatar: string;



    @OneToMany(type => Group, group => group.admin)
    groupsHeCreated: Group[]


    // groupsHeJoined: []

}

export default User