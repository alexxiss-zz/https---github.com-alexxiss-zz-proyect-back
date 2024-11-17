import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn()
  idAdmin: number

  @Column({ length: 30, nullable: true })
  nameAdmin: string

  @Column({ length: 30, nullable: true })
  lastName: string

  @Column({ length: 60, nullable: true })
  email: string

  @Column({ length: 20, nullable: true })
  password: string

  @CreateDateColumn({ nullable: true })
  date: Date

  @Column({ nullable: true })
  status: boolean
}
