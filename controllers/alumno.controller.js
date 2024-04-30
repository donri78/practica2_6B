// Path: controllers/alumno.controller.js
const Alumno = require('../models/alumno.models');


const obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        if(alumnos.length === 0){
            res.status(400).json({
                msg: 'No hay alumnos registrados'
            });
        }
        res.status(200).json({
            alumnos
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener los alumnos'
        });
        
    }
}

const obtenerAlumnoPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const alumno = await Alumno.findById(id);
        if(alumno == null){
            res.status(400).json({
                msg: 'Alumno no encontrado'
            });
        }
        res.json({
            msg: 'Alumno encontrado',
            alumno
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener el alumno'
        });
        
    }
}

const insertarAlumno = async (req, res) => {
    const body = req.body;
    try {
        const alumno = new Alumno(body); // Creamos una instancia del modelo Alumno
        await alumno.validate(); // Validamos los datos
        const nuevoAlumno = await alumno.save(); // Guardamos el alumno en la base de datos
        res.status(201).json({ // Respondemos al cliente con el código 201 (creado) y el alumno creado
            msg: 'Alumno creado',
            alumno: nuevoAlumno
        });
    } catch (error) {
        res.status(500).json({ // Si hay un error, respondemos al cliente con el código 500 (error) y el error
            msg: 'Error al insertar el alumno',
            error: error
        });
        
    }
    
}

const actualizarAlumno = async (req, res) => {
    try {
            const body = req.body; // Destructuración de arreglos id= primer elemento, resto= resto de elementos
            //si es id valido
            const id = req.params.id; // Obtenemos el id del alumno a actualizar
            const alumno = await Alumno.findById(id); // Buscamos el alumno en la base de datos
            if(alumno.length === 0){ // Si el alumno no existe, respondemos al cliente con el código 400 (bad request)
                res.status(400).json({
                    msg: 'Alumno no encontrado'
                });
            }
            //actualizar alumno
            await Alumno.findByIdAndUpdate(id, body, { new: true }); // Actualizamos el alumno en la base de datos
            res.json({ // Respondemos al cliente con el alumno actualizado
                msg: 'Alumno actualizado',
                alumno: alumno
            });
    } catch (error) {
            res.status(500).json({ // Si hay un error, respondemos al cliente con el código 500 (error) y el error
                msg: 'Error al actualizar el alumno',
                error: error
            });
        
    }
}

const eliminarAlumno = async (req, res) => {
    try {
        const id = req.params.id;
        const alumno = await Alumno.findById(id);
        if (!alumno || !alumno.length) { // Si el alumno no existe, envía una respuesta 400 y termina la ejecución del controlador
            return res.status(400).json({
                msg: 'Alumno no encontrado'
            });
        }
        // El alumno existe, elimínalo
        await Alumno.findByIdAndDelete(id);
        res.json({
            msg: 'Alumno eliminado',
            alumno: alumno
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar el alumno'
        });
    }
}

module.exports = {
    obtenerAlumnos,
    obtenerAlumnoPorId,
    insertarAlumno,
    actualizarAlumno,
    eliminarAlumno
}
