
 const { Router } = require('express'); // Importamos Router desde express
 const { obtenerAlumnos, obtenerAlumnoPorId, eliminarAlumno, actualizarAlumno, insertarAlumno } = require('../controllers/alumno.controller'); // Importamos los métodos del controlador

const router = Router(); // Inicializamos Router

    // Ruta de los alumnos
    router.get('/alumno', obtenerAlumnos);

    //obter por id
    router.get('/alumno/:id', obtenerAlumnoPorId);

    // Ruta de los alumnos
    router.put('/alumno',  actualizarAlumno);

    // Ruta de los alumnos
    router.post('/alumno', insertarAlumno);

    // Ruta de los alumnos eliminar por id
    router.delete('/alumno/:id', eliminarAlumno);

    module.exports = router; // Exportamos el router para poder utilizarlo en otros archivos
