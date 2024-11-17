const express = require('express'); //Importar Express
const app = express();  // Crear una aplicación de Express

const PORT = 3000;  // Definir el puerto

// Endpoint
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});