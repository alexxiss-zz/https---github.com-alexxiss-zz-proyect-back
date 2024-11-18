import { Request, Response } from 'express'
import { UserService } from '../service/user.service'

const userService = new UserService()

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsers()

    res.status(200).json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body)

    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}

// export class UserController {
//   private readonly userService: UserService

//   constructor() {
//     this.userService = new UserService()
//   }

//   public createUser = async (req: Request, res: Response) => {
//     try {
//       const user = await this.userService.createUser(req.body)

//       res.status(201).json(user)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
