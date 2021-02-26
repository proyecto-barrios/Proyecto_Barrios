import passport from 'passport';
import { Usuarios } from '../models/tablas';

export const guardarUsuario = (req, res) => {
    const { nombre, apellido, correo, telefono, direccion, sexo, usuario, clave, barrio } =  req.body
    Usuarios.create({
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            sexo,
            usuario,
            clave,
            // barrio: parseInt(barrio),
            barrio,
    })
}

export const listarUsuarios = () => {
    return Usuarios.findAll()
}


export const logueado = (req, res) =>{
    const {usuario, clave} = req.body
    //console.log('test', usuario, clave);
    req.session.usuario = usuario;
   /* return passport.authenticate('local',{
        failureRedirect: '/asd',
        successRedirect: '/',
        failureFlash: true
    });*/
}