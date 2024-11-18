import { DeepPartial, Repository } from 'typeorm'
import { Course } from '../models/Course.entity'
import { AppDataSource } from '../config/database.config'

export class CourseRepository {
  private readonly CourseRepository: Repository<Course>

  constructor() {
    this.CourseRepository = AppDataSource.getRepository(Course)
  }

  public async findAllCourses() {
    return this.CourseRepository.find()
  }

  public async findCourseByTitle(title: string) {
    return this.CourseRepository.findOne({
      where: {
        title,
      },
    })
  }

  public async findCourseByCategory(category: string) {
    return this.CourseRepository.findOneOrFail({
      where: {
        category,
      },
    })
  }

  public async createCourse(data: DeepPartial<Course>) {
    const course = this.CourseRepository.create(data)
    return this.CourseRepository.save(course)
  }
}
