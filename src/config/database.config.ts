import path from 'node:path'
import { DataSource } from 'typeorm'

const ENTITIES_PATH = path.join(__dirname, '..', 'models', '*.entity.{ts,js}')

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT) ?? 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [ENTITIES_PATH],
  synchronize: true,
  logger: 'simple-console',
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
