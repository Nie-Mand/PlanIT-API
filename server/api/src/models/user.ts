import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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


    // groupsHeJoined: []
    // groupsHeCreated: []

}

export default User