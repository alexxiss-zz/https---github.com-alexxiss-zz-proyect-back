import { Router } from 'express'
import { createUser, getAllUsers } from '../controllers/user.controller'
import { createUserValidator } from '../middlewares/validators/user/create-user.validator'

const router = Router()

router.get('/', getAllUsers)

router.post('/', createUserValidator, createUser)

export default router
