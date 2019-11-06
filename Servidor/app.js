//const express = require('express');
import express from 'express';
//const listarBarrios = require('./controladores/barrios');
import { listarBarrios } from './controladores/barrios';
import { guardarUsuario } from './controladores/usuario'
import bodyParser from 'body-parser';
const app = express();
const path = require('path');

//MIDDLEWARE
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES

app.get('/api/barrios',function(req,res){
    res.send(listarBarrios());
});

app.post('/api/usuario',function(req,res) {
    try {
        const respuestaGuardarUsuario = guardarUsuario(req);
        //res.send(200, { ok: true });
        res.status(200).send({ ok:true });
    }
    catch (err) {
        res.send(400, { ok: false, err });
    }

});

/*app.get('/api/usuario', (req, res) => {
    const mostrarUsuario = conn('SELECT * FROM usuario');
    console.log(mostrarUsuario);
    res.send('se muestran las lista en consola');
})*/


app.listen(4000, function(){
    console.log('la aplicacion empezo en el puerto 4000');
});