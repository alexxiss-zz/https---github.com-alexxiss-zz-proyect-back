import { DeepPartial, Repository } from 'typeorm'
import { User } from '../models/User.entity'
import { AppDataSource } from '../config/database.config'

export class UserRepository {
  private readonly userRepository: Repository<User>

  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
  }

  public async findAllUsers() {
    return this.userRepository.find()
  }

  public async findUserByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    })
  }

  public async createUser(data: DeepPartial<User>) {
    const user = this.userRepository.create(data)
    return this.userRepository.save(user)
  }
}
