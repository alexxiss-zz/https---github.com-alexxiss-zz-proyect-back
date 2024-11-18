import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { Course } from './Course.entity'

@Entity()
export class Session {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column()
  videoURL: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => Course, course => course.sessions)
  @JoinColumn()
  course: Relation<Course>
}
