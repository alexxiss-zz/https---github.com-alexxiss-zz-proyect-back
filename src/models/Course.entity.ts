import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  idcourse: number

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

  @CreateDateColumn({ nullable: false })
  createCourse: Date

  @UpdateDateColumn({ nullable: true })
  updateCourse: Date
}
