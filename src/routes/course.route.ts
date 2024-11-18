import { Router } from 'express'
import {
  createCourse,
  getAllCourse,
  getAllCourseAndSession,
} from '../controllers/course.controller'
// import { createUserValidator } from '../middlewares/validators/user/create-user.validator'

const router = Router()

router.get('/', getAllCourse)

router.get('/sessions', getAllCourseAndSession)

router.post('/', createCourse)

export default router
