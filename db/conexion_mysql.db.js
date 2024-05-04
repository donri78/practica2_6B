const mysql = require('mysql');

const conectarMysqlDB =async()=>{
    try{
        await mysql.createConnection('${process.env.MYSQLDB}/${process.env.universidad}');
        console.log('Base de datos conectada'.yellow);

    }
    catch(error){
       console.log(error);
       throw new Error('Error al conectar la base de datos'.red);
    }
}

module.exports= conectarMysqlDB;





