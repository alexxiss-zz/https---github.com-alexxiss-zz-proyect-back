import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { LoginDto } from '../../../dto/auth/login.dto'

export const loginUserValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userAuth = plainToInstance(LoginDto, req.body)

    await validateOrReject(userAuth)

    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}
