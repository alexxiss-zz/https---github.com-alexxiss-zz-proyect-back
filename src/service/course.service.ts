import { CourseRepository } from '../repositories/course.repository'
import { Course } from '../models/Course.entity'

export class CourseService {
  private readonly courseRepository: CourseRepository

  constructor() {
    this.courseRepository = new CourseRepository()
  }

  public async findAllCourses() {
    return this.courseRepository.findAllCourses()
  }

  // public async findUserByEmail(email: string) {
  //   return this.userRepository.findUserByEmail(email)
  // }

  public async createCourse(data: Course) {
    return this.courseRepository.createCourse(data)
  }
}
