import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { initDatabase } from './config/database.config'

import userRouter from './routes/user.route'
import authRouter from './routes/auth.route'
import courseRouter from './routes/course.route'
import paymentRouter from './routes/payment.route'

const app = express() // Crear una aplicación de Express

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PORT ?? 3000

// localhost:8000/api/user
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/course', courseRouter)
app.use('/api/payment', paymentRouter)

async function main() {
  await initDatabase()

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
}

main()
