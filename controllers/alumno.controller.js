// // Path: controllers/alumno.controller.js
// const Alumno = require('../models/alumno.models');
// const alumnoModel = new Alumno();

// const Alumnos=require('../models/alumno.models');

// const obtenerAlumnos = async (req, res) => {
//    try{
//     const alumnos = await Alumnos.find();

//     if (alumnos.length === 0){
//         return res.status(404).json=({
//             msg:'No hay datos personales'
//         });

//     }
//     res.status(200).json({
//         datos:alumnos
//     });
//    }catch(error){
//     res.status(500).json({
//         msg:'Error en el servidor'
//     });
//    }
   
// }

// const obtenerAlumnoPorId = async (req, res) => {
//     const id = req.params.id;
//     const alumno = await alumnoModel.obtenerAlumnoPorId(id);
//     res.json({
//         alumno
//     });
// }

// const insertarAlumno = async (req, res) => {
//     const body = req.body;
//     const alumno = await alumnoModel.insertarAlumno(body);
//     res.json({
//         alumno
//     });
// }

// const actualizarAlumno = async (req, res) => {
//     const body = req.body; // Destructuración de arreglos id= primer elemento, resto= resto de elementos
//     const alumno = await alumnoModel.actualizarAlumno(body.id, body);
//     res.json({
//         alumno
//     });
// }

// const eliminarAlumno = async (req, res) => {
//     const id = req.params.id;
//     const alumno = await alumnoModel.eliminarAlumno(id);
//     if(alumno == false){
//         res.status(400).json({
//             msg: 'Alumno no encontrado'
//         });
//     }
//     res.json({
//         msg: 'Alumno eliminado',
//         alumno: alumno
//     });
// }

// module.exports = {
//     obtenerAlumnos,
//     obtenerAlumnoPorId,
//     insertarAlumno,
//     actualizarAlumno,
//     eliminarAlumno
// }
