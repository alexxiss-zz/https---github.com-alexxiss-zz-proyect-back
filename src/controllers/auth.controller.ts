import { Request, Response } from 'express'
import { AuthService } from '../service/auth.service'

const authService = new AuthService()

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.register(req.body)

    res.status(201).json(user)
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
      })
      return
    }

    res.status(500).json({
      message: 'Error en el sevidor',
    })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const user = await authService.login(req.body)

    res.status(200).json(user)
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
      })
      return
    }

    res.status(500).json({
      message: 'Error en el sevidor',
    })
  }
}
