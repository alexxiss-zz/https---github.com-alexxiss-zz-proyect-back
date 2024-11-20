import { AppDataSource } from '../config/database.config'
import { Payment } from '../models/Payment.entity'
import { Repository } from 'typeorm'

export class PaymentRepository {
  private readonly paymentRepository: Repository<Payment>

  constructor() {
    this.paymentRepository = AppDataSource.getRepository(Payment)
  }

  createPayment(data: any) {
    const payment = this.paymentRepository.create(data)

    return this.paymentRepository.save(payment)
  }
}
