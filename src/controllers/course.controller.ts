import { Request, Response } from 'express'
import { CourseService } from '../service/course.service'

const courseService = new CourseService()

export const getAllCourse = async (_req: Request, res: Response) => {
  try {
    const courses = await courseService.findAllCourses()

    res.status(200).json(courses)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await courseService.createCourse(req.body)

    res.status(201).json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: 'Hubo un error en el servidor',
    })
  }
}
