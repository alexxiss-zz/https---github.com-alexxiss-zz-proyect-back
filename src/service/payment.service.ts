import { PaymentRepository } from '../repositories/payment.repository'

export class PaymentService {
  private readonly paymentRepository: PaymentRepository

  constructor() {
    this.paymentRepository = new PaymentRepository()
  }

  createPayment(data: any) {
    return this.paymentRepository.createPayment(data)
  }
}
