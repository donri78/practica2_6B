const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DB}`)
        .then(() => console.log('Conectado a la base de datos'.cyan))
        .catch(error => console.log('Error al conectar a la base de datos'.red, error));
        
    } catch (error) {
        console.log('Error al conectar a la base de datos'.red, error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB; // Exportamos la función para poder utilizarla en otros archivos