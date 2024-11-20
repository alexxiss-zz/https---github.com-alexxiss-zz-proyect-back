import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './User.entity'
import { PaymentMethod } from './PaymentMethod.entity'
import { PaymentDetail } from './PaymentDetail.entity'

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  totalPayment: number

  @Column({ default: false, nullable: false })
  status: boolean

  @ManyToOne(() => PaymentMethod)
  @JoinColumn()
  paymentMethod: Relation<PaymentMethod>

  @ManyToOne(() => User, user => user.payments)
  @JoinColumn()
  user: Relation<User>

  @OneToMany(() => PaymentDetail, payment => payment.payment, {
    cascade: ['recover', 'insert'],
  })
  paymentDetails: Relation<PaymentDetail[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
