require('colors');
require('dotenv').config();

const conectarDB= require('./db/conexion_mysql.db');

const   Server = require('./server/server');

console.clear(); // Limpiamos la consola

const servidor = new Server(); // Inicializamos el servidor


servidor.listen(); // Iniciamos el servidor

conectarDB();

