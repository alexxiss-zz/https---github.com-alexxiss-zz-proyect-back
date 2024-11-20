import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { Payment } from './Payment.entity'
import { Course } from './Course.entity'

@Entity()
export class PaymentDetail {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => Payment, payment => payment.paymentDetails)
  @JoinColumn()
  payment: Relation<Payment>

  @ManyToOne(() => Course)
  @JoinColumn()
  course: Course
}
