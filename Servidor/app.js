//const express = require('express');
import express from 'express';
import { listarBarrios } from './controladores/barrios';
const app = express();
//const listarBarrios = require('./controladores/barrios');
app.get('/api/barrios',function(req,res){
    res.send(listarBarrios());
});

app.listen(4000, function(){
    console.log('la aplicacion empezo en el puerto 4000');
});