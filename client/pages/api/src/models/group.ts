import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import User  from './user'
@Entity()
class Group extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, unique: true })
    name: string;

    @Column({ length: 150 })
    description: string;

    @Column()
    isPrivate: boolean;

    @Column()
    isOpenInvite: boolean;
    
    @Column()
    avatar: string;

    
    @ManyToOne(type => User, user => user.groupsHeCreated)
    admin: User;
    // members: [],
    // invitedMembers: [],
    // : '',

    // events: []

}

export default Group