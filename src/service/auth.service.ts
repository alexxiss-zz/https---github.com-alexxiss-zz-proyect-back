import { hash, compare } from 'bcrypt'
import { UserRepository } from '../repositories/user.repository'
import { RegisterDto } from 'src/dto/auth/register.dto'
import { LoginDto } from 'src/dto/auth/login.dto'

export class AuthService {
  private readonly userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async register(data: RegisterDto) {
    const user = await this.userRepository.findUserByEmail(data.email)

    if (user) {
      throw new Error('El usuario ya esta registrado')
    }

    const passwordEncrypted = await hash(data.password, 4)

    const userCreated = await this.userRepository.createUser({
      ...data,
      password: passwordEncrypted,
    })

    return userCreated
  }

  public async login(data: LoginDto) {
    const { email, password } = data

    const user = await this.userRepository.findUserByEmail(email)

    if (!user) {
      throw new Error('El usuario no existe')
    }

    const compareResult = await compare(password, user.password)

    if (!compareResult) {
      throw new Error('Constraseña incorrecta')
    }

    return user
  }
}
