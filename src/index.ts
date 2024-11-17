import express from 'express'
import { AppDataSource, initDatabase } from './config/database.config'

const app = express() // Crear una aplicación de Express

const PORT = 3000 // Definir el puerto

// Endpoint 1
app.get('/', (request, res) => {
  res.send('Hola mundo')
})

async function main() {
  await initDatabase()
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  })
}

main()
