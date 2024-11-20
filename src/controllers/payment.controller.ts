import { Request, Response } from 'express'
import { PaymentService } from '../service/payment.service'

const paymentService = new PaymentService()

export const createPayment = async (req: Request, res: Response) => {
  try {
    const payment = await paymentService.createPayment(req.body)

    res.status(201).json(payment)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}
