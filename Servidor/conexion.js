const Sequelize = require('sequelize');
const conn = new Sequelize('vecinos_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

conn.authenticate()
.then(() => {
    console.log('La conexion se establecio correctamente.');
   
})
.catch(err => {
    console.log('No se conecto la base de datos.');
});

//conn.sync({ force: true });
// DE ALGUNA FORMA SEQUELIZE TE CREA LAS TABLAS CON TERMINACION "S"

 export default conn;