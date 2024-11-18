import { Router } from 'express'
import { createCourse, getAllCourse } from '../controllers/course.controller'
import { createUserValidator } from '../middlewares/validators/user/create-user.validator'

const router = Router()

router.get('/', getAllCourse)

router.post('/', createUserValidator, createCourse)

export default router
