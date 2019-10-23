const Sequelize = require('sequelize');
const conn = new Sequelize('vecinos', 'root', '', {
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

 export default conn;