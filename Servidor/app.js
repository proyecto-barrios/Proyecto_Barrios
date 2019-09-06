//const express = require('express');
import express from 'express';
//const listarBarrios = require('./controladores/barrios');
import { listarBarrios } from './controladores/barrios';
//Inicializando paquetes

const app = express();
const path = require('path');
//cfg
app.set('',);
// routes
app.get('/',(req,res) => {
    res.render(path.join('C:/Users/Alumno/proyecto_final/Cliente/src/App.js'));
});

app.get('/api/barrios',function(req,res){
    res.send(listarBarrios());
});

// archivos estativos - carpeta al nav css imagenes fuentes iconos

// listening the server
app.listen(4000, function(){
    console.log('la aplicacion empezo en el puerto 4000');
});