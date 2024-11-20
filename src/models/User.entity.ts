import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { Payment } from './Payment.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number

  @Column({ length: 50, nullable: false })
  nameComplete: string

  @Column({ length: 50, nullable: true })
  nameCompleteUser: string

  @Column({ length: 60, nullable: false, unique: true })
  email: string

  @Column({ nullable: false })
  password: string

  @Column({ nullable: true })
  dateBirth: Date

  @Column({ length: 50, nullable: true })
  phone: string

  @Column({ nullable: true })
  DNI: number

  @Column({ nullable: true, default: true })
  status: boolean

  @Column({ length: 50, nullable: true })
  plan: string

  @OneToMany(() => Payment, payment => payment.user, { cascade: true })
  payments: Relation<Payment[]>
}
