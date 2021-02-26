//const express = require('express');
import express from 'express';
//const listarBarrios = require('./controladores/barrios');
import { listarBarrios } from './controladores/barrios';
import { listarPosteos, guardarPosteo } from './controladores/posteos';
import { guardarUsuario, listarUsuarios, logueado } from './controladores/usuario';
import { guardarCorreo } from './controladores/correos';
import multer from 'multer';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Barrios } from './models/tablas';
import { Usuarios } from './models/tablas';
const app = express();
const path = require('path');

const storage = multer.memoryStorage()
const upload = multer({storage: storage});
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//require('./config/passport');
//MIDDLEWARE
// Configurar cabeceras y cors
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(bodyParser.json({limit: "3mb"}));
app.use(bodyParser.urlencoded({limit: "3mb", extended: false, parameterLimit: 3000}));

// PARA PASSPORT Y SESSION
app.use(session({ secret: 'mouseelraton', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); // logueo de sesion persistente llama a serializeUser y deserealizeUser

app.use((req, res, next) => {
    console.log('req.session', req.session);
    return next();
});


passport.use(new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'clave'
},
    function(usuario, clave, done){
        Usuarios.findOne({
            where: {
                usuario: usuario
            }
        }).then(function(dbUser){
            if (!dbUser){
                return done (null, false, {
                    message: 'usuario incorrecto'
                });
            }
            else if (!dbUser.validPassword(clave)){
                return done(null, false,{
                    message: 'contraseña incorrecta'
                });
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser(function(usuario, cb) {
    cb(null, usuario);
  });
  //
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

// ROUTES

app.get('/api/barrios',function(req,res){
    //res.send(listarBarrios());
    listarBarrios()
        .then(Barrios => {
            res.send(Barrios)
        })
});

app.get('/api/posteos',function(req,res){
    
    listarPosteos()
        .then(posteos => {
            res.send(posteos)
        })
});

app.get('/api/usuario', function(req, res){

    listarUsuarios()
        .then(Usuarios =>{
            res.send(Usuarios)
        })
});

// guardar todos los posts
app.post('/api/posteos', upload.single("imagen"), function(req, res) {
    try{
        const respguardarPosteo = guardarPosteo(req);
        res.status(200).send({ok: true});
    }
    catch(err){
        res.send(400, {ok: false, err});
    }
})


app.post('/api/usuario',function(req,res) {
    try {
        const respuestaGuardarUsuario = guardarUsuario(req);
        res.status(200).send({ ok:true });
    }
    catch (err) {
        res.status(400), ({ok: false, err});
    }
});

app.post('/api/correo',function(req,res) {
    try {
        const respguardarCorreo = guardarCorreo(req);
        res.status(200).send({ ok:true });
    }
    catch (err) {
        res.status(400), ({ ok: false, err });
    }
});

app.post('/api/logueo', passport.authenticate('local',{
            failureRedirect: '/Registro',
            successRedirect: '/',
            failureMessage: true,
/*    try{
        const logueoCompleto = logueado(req);
        const {usuario, clave} = req.body
        //console.log('test', usuario, clave);
        //req.session.usuario = usuario;
        passport.authenticate('local',{
            failureRedirect: '/Registro',
            successRedirect: '/',
            failureMessage: true
        });
        console.log('req.session', req.session);
        res.status(200).send({ ok: true});
        
    }
    catch (err){
        res.status(400), ({ ok: false, err});
    }*/
    },console.log('asdasdads')))

/*app.get('/api/usuario', (req, res) => {
    const mostrarUsuario = conn('SELECT * FROM usuario');
    console.log(mostrarUsuario);
    res.send('se muestran las lista en consola');
})*/


app.listen(4000, function(){
    console.log('la aplicacion empezo en el puerto 4000');
});