// models/alumno.models.js

const mongoose = require('mongoose');

// Definimos el esquema de la colección Alumnos
const AlumnoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    }
});

const Alumno = mongoose.model('Alumno', AlumnoSchema); // Creamos el modelo Alumno

module.exports = Alumno; // Exportamos el modelo para poder utilizarlo en otros archivos