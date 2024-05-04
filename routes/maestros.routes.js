const { Router } = require('express'); // Importamos Router desde express
 const { obtenerAlumnos, obtenerAlumnoPorId, eliminarAlumno, actualizarAlumno, insertarAlumno } = require('../controllers/alumno.controller'); // Importamos los métodos del controlador

const router = Router(); // Inicializamos Router

    // Ruta de los alumnos
    // router.get('/alumno', obtenerAlumnos);
    router.get ('/alumno',(req , res) =>{
        res.json({
            msg: 'GET API'
        });
    });

    router.get ('/alumno/:id',(req , res) =>{
        res.json({
            msg: 'GET BY API'
        });
    });

    router.post ('/alumno',(req , res) =>{
        res.json({
            msg: 'POST API'
        });
    });

    router.put ('/alumno',(req , res) =>{
        res.json({
            msg: 'PUT API'
        });
    });

    router.delete ('/alumno',(req , res) =>{
        res.json({
            msg: 'DELETE API'
        });
    });


    module.exports = router; // Exportamos el router para poder utilizarlo en otros archivos
