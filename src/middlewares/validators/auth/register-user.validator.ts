import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { RegisterDto } from '../../../dto/auth/register.dto'

export const registerUserValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userAuth = plainToInstance(RegisterDto, req.body)

    await validateOrReject(userAuth)

    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}
