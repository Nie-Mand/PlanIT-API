import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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


    // members: [],
    // invitedMembers: [],
    // admin: '',

    // events: []

}

export default Group