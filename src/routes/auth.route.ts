import { Router } from 'express'
import { login, register } from '../controllers/auth.controller'
import { registerUserValidator } from '../middlewares/validators/auth/register-user.validator'
import { loginUserValidator } from '../middlewares/validators/auth/login-user.validator'

const router = Router()

router.post('/login', loginUserValidator, login)

router.post('/register', registerUserValidator, register)

export default router
