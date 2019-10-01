const Sequelize = require('sequelize');
const conn = new Sequelize('ifts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

conn.authenticate()
.then(() => {
    console.log('La conexion se establecio correctamente.');
    //modeling table
    const usuarios = conn.define('alumno', {
        id: {type: Sequelize.SMALLINT, primaryKey: true},
        nombre: Sequelize.STRING,
        edad: Sequelize.INTEGER,
        correo: Sequelize.STRING,
    }, { tableName: 'alumno'}) 

    // consultas de todos los usuarios
 usuarios.findAll({ attributes: ['id', 'nombre', 'edad', 'correo']})
 .then(users => {
     users.foreach(user => console.log(user.get({plain:true})))
 })
 .catch(err=> {
     console.log(err)
 })
   
})
.catch(err => {
    console.log('No se conecto la base de datos.');
});

 

 export default conn
 