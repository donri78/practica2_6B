// models/alumno.models.js


class Alumno {
    //listaAlumno es temporal hasta que se conecte a la base de datos
    alumnos = [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Perez',
            email: 'juan.perez@utelvt.edu.ec',
            ciudad: 'Loja',
            edad: 25
        },
        {
            id: 2,
            nombre: 'Maria',
            apellido: 'Gomez',
            email: 'maria.gomez@utelvt.edu.ec',
            ciudad: 'Loja',
            edad: 23
        },
    ];

    // Constructor de la clase inicializa variables de la clase
    constructor() {
    }


    /**
     * Obtiene todos los alumnos
     * @returns {Promise<Alumno[]>} Listado de alumnos
     */ 
    obtenerTodosAlumnos = async () => {
        return this.alumnos;
    }

    /**
     * Obtiene un alumno por su id
     * @param {number} id - Identificador del alumno
     * @returns {Promise<Alumno>} Alumno encontrado
     */
    obtenerAlumnoPorId = async (id) => {
        return this.alumnos.find(a => a.id === id);
    }

    /**
     * Crea un nuevo alumno
     * @param {Alumno} alumno - Alumno a crear
     * @returns {Promise<Alumno>} Alumno creado
     */
    insertarAlumno = async (alumno) => {
        const id = this.alumnos.length + 1;
        alumno.id = id;
        this.alumnos.push(alumno);
        return alumno; 
    }

    /**
     * Actualiza un alumno
     * @param {number} id - Identificador del alumno
     * @param {Alumno} alumno - Alumno a actualizar
     * @returns {Promise<Alumno>} Alumno actualizado
     */
    actualizarAlumno = async (id, alumno) => {
        const index = this.alumnos.findIndex(a => a.id === id);
        this.alumnos[index] = {...this.alumnos[index], ...alumno};
        return this.alumnos[index];
    }

    /**
     * Elimina un alumno
     * @param {number} id - Identificador del alumno
     * @returns {Promise<Alumno>} Alumno eliminado
     */
    eliminarAlumno = async (id) => {
        id = parseInt(id); // Convertimos a entero
        // Encuentra el alumno a eliminar
        let alumnoEliminar = this.alumnos.find(alumno => alumno.id === id)
        console.log(alumnoEliminar);
        // Si el alumno existe, elimínalo
        if (alumnoEliminar) {
            this.alumnos = this.alumnos.filter(a => a.id !== id);
        }
    
        // Retorna el alumno eliminado
        return alumnoEliminar;
    }
}

module.exports =  Alumno; // Exportamos la clase para poder utilizarla en otros archivos