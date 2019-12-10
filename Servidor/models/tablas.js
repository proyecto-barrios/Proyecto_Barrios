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
    clave: Sequelize.STRING,
    barrio: Sequelize.INTEGER,
}, { tableName: 'usuario',  timestamps: false}) 

// modeling table barrio
export const Barrios = conn.define('barrio', {
    id_barrio: {type: Sequelize.SMALLINT, primaryKey: true},
    nombre_barrio: Sequelize.STRING,
}, { tableName: 'barrio', timestamps: false})

// modeling table posteo
export const Posteos = conn.define('posteo', {
    id_posteo: {type: Sequelize.SMALLINT, primaryKey:true},
    texto: Sequelize.TEXT,
    imagen: Sequelize.BLOB('long'),
    fk_id_user: Sequelize.SMALLINT,
    tiempo: Sequelize.TIME,
}, { tableName: 'posteo', timestamps: false})

 //modeling table correo
 export const Correos = conn.define('correo', {
    id_correo: {type: Sequelize.SMALLINT, primaryKey: true},
    nombre: Sequelize.STRING,
    apellido: Sequelize.INTEGER,
    correo: Sequelize.STRING,
    telefono: Sequelize.INTEGER,
    motivo: Sequelize.STRING,
    mensaje: Sequelize.TEXT,
}, { tableName: 'correo',  timestamps: false}) 

/*
    // consultas de todos los usuarios
    Usuarios.findAll({ attributes: ['id_usuario', 'nombre', 'apellido', 'correo', 'telefono', 'direccion', 'sexo', 'usuario', 'clave', 'barrio']})
    .then(users => {
        users.forEach(user => console.log(user.get({plain:true})))
    })
    .catch(err=> {
        console.log(err)
    })
*/

// consultas de posteos
Posteos.findAll({ attributes: ['id_posteo', 'texto', 'imagen', 'fk_id_user', 'tiempo']})
.then(users => {
    users.forEach(user => console.log(user.get({plain:true})))
})
.catch(err=> {
    console.log(err)
})