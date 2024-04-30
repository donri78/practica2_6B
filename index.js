require('colors');
require('dotenv').config(); // Para leer las variables de entorno
const conectarDB = require('./db/conexion_mongo');

const Server = require('./server/server');

console.clear(); // Limpiamos la consola
conectarDB(); // Conectamos a la base de datos
const servidor = new Server(); // Inicializamos el servidor

servidor.listen(); // Iniciamos el servidor