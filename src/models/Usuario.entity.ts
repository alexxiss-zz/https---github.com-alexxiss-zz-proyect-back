import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idUser: number

  @Column({ length: 50, nullable: true })
  nameComplete: string

  @Column({ length: 50, nullable: true })
  nameCompleteUser: string

  @Column({ length: 50, nullable: true })
  email: string

  @Column({ length: 50, nullable: true })
  password: string

  @CreateDateColumn({ nullable: true })
  dateBirth: Date

  @Column({ length: 50, nullable: true })
  phone: string

  @Column({ nullable: true })
  DNI: number

  @Column({ nullable: true })
  status: boolean

  @Column({ length: 50, nullable: true })
  plan: string
}
