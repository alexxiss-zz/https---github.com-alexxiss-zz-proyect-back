import { plainToInstance } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { CreateUserDto } from '../../../dto/user/create-user.dto'

export const createUserValidator = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = plainToInstance(CreateUserDto, req.body)

    await validateOrReject(user)

    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}
