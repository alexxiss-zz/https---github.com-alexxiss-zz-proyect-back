import { UserRepository } from '../repositories/user.repository'
import { User } from '../models/User.entity'

export class UserService {
  private readonly userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async findAllUsers() {
    return this.userRepository.findAllUsers()
  }

  // public async findUserByEmail(email: string) {
  //   return this.userRepository.findUserByEmail(email)
  // }

  public async createUser(data: User) {
    return this.userRepository.createUser(data)
  }
}
