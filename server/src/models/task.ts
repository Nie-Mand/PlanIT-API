import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import Board  from './board'

@Entity()
class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    content: string;

    @ManyToOne(() => Board, (board: Board) => board.tasks, { onDelete: 'CASCADE' })
    board: Board

    @Column()
    isPriority: boolean
}

export default Task