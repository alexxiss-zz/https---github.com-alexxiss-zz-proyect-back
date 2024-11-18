import 'dotenv/config'

import express from 'express'
import { initDatabase } from './config/database.config'
import morgan from 'morgan'

import userRouter from './routes/user.route'
import authRouter from './routes/auth.route'

const app = express() // Crear una aplicación de Express

app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT ?? 8000

// localhost:8000/api/user
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

async function main() {
  await initDatabase()

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
}

main()
