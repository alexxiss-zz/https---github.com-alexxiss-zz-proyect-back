import { DeepPartial, ILike, Repository } from 'typeorm'
import { Course } from '../models/Course.entity'
import { AppDataSource } from '../config/database.config'

export class CourseRepository {
  private readonly courseRepository: Repository<Course>

  constructor() {
    this.courseRepository = AppDataSource.getRepository(Course)
  }

  public async findAllCourses() {
    return this.courseRepository.find()
  }

  public async findAllCoursesAndSession() {
    return this.courseRepository.find({
      relations: {
        sessions: true,
      },
    })
  }

  public async findCourseByTitle(title: string) {
    return this.courseRepository.find({
      where: {
        title: ILike(`%${title}%`),
      },
      relations: {
        sessions: true,
      },
    })
  }

  public async findCourseByCategory(filters: {
    category: string
    price: number
    title: string
  }) {
    const { title, category, price } = filters

    return this.courseRepository.find({
      where: {
        title: ILike(`%${title}%`),
        category,
        price: price || undefined,
      },
    })
  }

  public async createCourse(data: DeepPartial<Course>) {
    const course = this.courseRepository.create(data)
    return this.courseRepository.save(course)
  }
}
