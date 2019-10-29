import conn from '../conexion';
const Sequelize = require('sequelize');

 //modeling table usuario
  export const Usuarios = conn.define('usuario', {
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
}, { tableName: 'usuario',  timestamps: false}) 

// modeling table barrio
export const Barrios = conn.define('barrio', {
    id_barrio: {type: Sequelize.SMALLINT, primaryKey: true},
    nombre_barrio: Sequelize.STRING,
}, { tableName: 'barrio', timestamps: false})

// modeling table posteo
export const posteos = conn.define('posteo', {
    id_posteo: {type: Sequelize.SMALLINT, primaryKey:true},
    texto: Sequelize.TEXT,
    imagen: Sequelize.BLOB('long'),
}, { tableName: 'posteo', timestamps: false})

/*
    // consultas de todos los usuarios
    Usuarios.findAll({ attributes: ['id_usuario', 'nombre', 'apellido', 'correo', 'telefono', 'direccion', 'sexo', 'usuario', 'contraseña', 'barrio']})
    .then(users => {
        users.forEach(user => console.log(user.get({plain:true})))
    })
    .catch(err=> {
        console.log(err)
    })
*/