import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { Session } from './Session.entity'

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50, nullable: false })
  title: string

  @Column({ length: 50, nullable: true })
  description: string

  @Column({ length: 60, nullable: false })
  duration: string

  @Column({ type: 'float', default: 0 })
  price: number

  @Column({ length: 50, nullable: false })
  category: string

  @Column({ length: 50, nullable: false })
  teacherID: string

  @OneToMany(() => Session, session => session.course, {
    cascade: ['insert', 'recover'],
  })
  sessions: Relation<Session[]>

  @CreateDateColumn({ nullable: false })
  createCourse: Date

  @UpdateDateColumn({ nullable: true })
  updateCourse: Date
}
