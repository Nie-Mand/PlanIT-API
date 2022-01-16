import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Task from "./task";
import User from "./user";

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @ManyToOne(() => User, (user: User) => user.boards)
  user: User;

  @OneToMany(() => Task, (task: Task) => task.board)
  tasks: Task[];

  // members: [],
  // invitedMembers: [],
  // : '',

  // events: []

  addTask(task: Task) {
    if (this.tasks) {
      this.tasks.push(task);
    } else {
      this.tasks = [task];
    }
  }
}

export default Board;
