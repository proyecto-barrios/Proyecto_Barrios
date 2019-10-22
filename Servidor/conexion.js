const Sequelize = require('sequelize');
const conn = new Sequelize('vecinos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

conn.authenticate()
.then(() => {
    console.log('La conexion se establecio correctamente.');
    //modeling table
    const usuarios = conn.define('usuario', {
        id_usuario: {type: Sequelize.SMALLINT, primaryKey: true},
        nombre: Sequelize.STRING,
        apellido: Sequelize.INTEGER,
        correo: Sequelize.STRING,
        telefono: Sequelize.INTEGER,
        direccion: Sequelize.STRING,
        sexo: Sequelize.INTEGER,
        usuario: Sequelize.STRING,
        contraseña: Sequelize.STRING,
        barrio: Sequelize.INTEGER,
    }, { tableName: 'usuario'}) 

    // consultas de todos los usuarios
 usuarios.findAll({ attributes: ['id_usuario', 'nombre', 'apellido', 'correo', 'telefono', 'direccion', 'sexo', 'usuario', 'contraseña', 'barrio']})
 .then(users => {
     users.forEach(user => console.log(user.get({plain:true})))
 })
 .catch(err=> {
     console.log(err)
 })
   
})
.catch(err => {
    console.log('No se conecto la base de datos.');
});

 

 export default conn
 