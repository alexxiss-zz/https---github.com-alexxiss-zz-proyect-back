import path from 'node:path'
import { DataSource } from 'typeorm'

const ENTITIES_PATH = path.join(__dirname, '..', 'models', '*.entity.{ts,js}')

export const AppDataSource = new DataSource({
  type: 'mysql',
  username: 'root',
  password: '123123',
  host: 'localhost',
  port: 3306,
  database: 'recreatecode',
  entities: [ENTITIES_PATH],
  synchronize: true,
})

export const initDatabase = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
      console.log('La base de datos se inició correctamente')
    }
  } catch (error) {
    console.error('Error al iniciar la base de datos', error)
  }
}
