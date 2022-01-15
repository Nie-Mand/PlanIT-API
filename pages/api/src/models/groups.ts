import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import User  from './user'
@Entity()
class Group extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;



    @Column({ length: 50 })
    name: string;

    @Column({ length: 150 })
    description: string;

    @Column()
    isPrivate: boolean;

    @Column()
    isOpenInvite: boolean;
    
    @Column()
    avatar: string;

    @OneToOne(type => User)
    @JoinColumn()
    admin: User;


    // members: [],
    // invitedMembers: [],
    // : '',

    // events: []

}

export default Group