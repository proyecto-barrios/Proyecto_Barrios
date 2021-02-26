import conn from '../conexion';
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

 //modeling table usuario

export const Usuarios = conn.define('usuario', {
    id_usuario: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    correo: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    sexo: Sequelize.INTEGER,
    usuario: Sequelize.STRING,
    clave: Sequelize.STRING
}, { tableName: 'usuario',  timestamps: false, 
    hooks:{
    beforeCreate: async function(Usuarios) {
        const salt = await bcrypt.genSalt(10);
        Usuarios.clave = await bcrypt.hash(Usuarios.clave, salt);
    }
    },
    instanceMethods: {
        validPassword: function(clave) {
            return bcrypt.compareSync(clave, this.clave);
        }
        }    
    
})


Usuarios.prototype.validPassword = async function(clave) {
        return await bcrypt.compareSync(clave, this.clave);
   }


// modeling table barrio
export const Barrios = conn.define('barrio', {
    id_barrio: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre_barrio: Sequelize.STRING,
}, { tableName: 'barrio', timestamps: false})

// modeling table posteo
export const Posteos = conn.define('posteo', {
    id_posteo: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    texto: Sequelize.TEXT,
    imagen: Sequelize.BLOB('long'),
    tiempo: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
}, { tableName: 'posteo', timestamps: false})

 //modeling table correo
 export const Correos = conn.define('correo', {
    id_correo: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    correo: Sequelize.STRING,
    telefono: Sequelize.STRING,
    motivo: Sequelize.STRING,
    mensaje: Sequelize.TEXT,
}, { tableName: 'correo',  timestamps: false}) 

Usuarios.belongsTo(Barrios, {foreignKey: {name: 'barrio', allowNull: false}, targetKey: 'id_barrio', as: 'barrios'});

Posteos.belongsTo(Usuarios, {foreignKey: {name: 'fk_id_user', allowNull: false}, targetKey: 'id_usuario', as: 'usuarios'});
/*
    // consultas de todos los usuarios
    Usuarios.findAll({ attributes: ['id_usuario', 'nombre', 'apellido', 'correo', 'telefono', 'direccion', 'sexo', 'usuario', 'clave', 'barrio']})
    .then(users => {
        users.forEach(user => console.log(user.get({plain:true})))
    })
    .catch(err=> {
        console.log(err)
    })


 consultas de posteos
Posteos.findAll({ attributes: ['id_posteo', 'texto', 'imagen', 'fk_id_user', 'tiempo']})
.then(users => {
    users.forEach(user => console.log(user.get({plain:true})))
})
.catch(err=> {
    console.log(err)
})
*/

// *********************************************************** SENTENCIA SQL SIN SEQUELIZE ******************************************************************
//SELECT posteo.imagen, posteo.tiempo FROM `usuario` INNER JOIN `barrio` ON (usuario.barrio = barrio.id_barrio) INNER JOIN `posteo` ON (usuario.id_usuario = posteo.fk_id_user) WHERE barrio.nombre_barrio = "villa luro" LIMIT 1 