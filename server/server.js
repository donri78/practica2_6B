const express = require('express'); // Importamos express para crear el servidor
require('dotenv').config(); // Para leer las variables de entorno
const fs = require('fs'); // Para trabajar con el sistema de archivos
const path = require('path'); // Para trabajar con rutas de archivos y directorios



class Server{
    // inicializamos el servidor
    constructor(){
        this.app = express(); // Inicializamos express
        this.port = process.env.PORT; // Puerto de la aplicación
        this.apiPath = '/api'; // Ruta base para los usuarios
        this.app.use(express.static('public'));  // Directorio público para las paginas
        this.app.use(express.json()); // Lectura y parseo del body en formato json

        // Middlewares
        this.middlewares(); // Llamamos al método que contiene los middlewares antes de iniciar las rutas


        // Rutas de mi aplicación
        this.routes(); // Llamamos al método que contiene las rutas
    }

    middlewares(){
        // CORS - Permitir que cualquier persona haga peticiones a nuestra API
        this.app.use((req, res, next) => { // Middleware para permitir el acceso a la API
            res.header('Access-Control-Allow-Origin', '*'); // Permite el acceso a todos los dominios
            res.header('Access-Control-Allow-Headers', 'Content-Type, x-token'); // Permite el acceso a los headers
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permite el acceso a los métodos
            next();
        });
    }

    routes(){
        // Ruta de los usuarios
        this.app.use(this.apiPath, require('../routes/alumno.routes'));
    }

    listen(){
        try {

            this.app.listen(this.port, () => {
                    console.log(`-----------------------------------------------------`.red);
                    console.log('Servidor corriendo en puerto'.green, this.port.yellow, ` http://localhost:${this.port}` + this.apiPath + '/'); // Mensaje en consola
                    // impimir lista separada por comas de las rutas
                    console.log(`RUTAS (ENDPOINT): `.bold, this.obtenerListaDeRutas().join(', ').green);

                    console.log(`-----------------------------------------------------`.red);
            });
        } catch (error) {
            console.log(error);
        }
    }

    obtenerListaDeRutas(){
        //obtener lista de todos los archivos de la carpeta routes con fs
        const routesPath = path.join(__dirname, '../routes');
        const files = fs.readdirSync(routesPath);
        //recorrer nombres de archivos, eliminar .routes.js y agregar a un array
        files.forEach((file, index) => {
            files[index] = file.replace('.routes.js', '');
        });
        return files;

    }
}

module.exports = Server;