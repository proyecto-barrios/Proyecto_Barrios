const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;
import { Strategy } from 'passport';
const Usuarios = require('../models/tablas');

passport.use(new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'clave'
},
    function(usuario, clave, done){
        Usuarios.findAll({
            where: {
                usuario: usuario
            }
        }).then(function(dbUser){
            if (!dbUser){
                return done (null, false, {
                    message: 'usuario incorrecto'
                });
            }
            else if (!dbUser.validarClave(clave)){
                return done(null, false,{
                    message: 'contraseña incorrecta'
                });
            }
            return done(null, dbUser);
        });
    }
));

/*passport.use(new LocalStrategy({
    // password utiliza por defecto estos campos
    usernameField : 'usuario',
    passwordField : 'clave'
}, async(usuario, clave, done)=>{
    const user = await Usuarios.findOne({where: {usuario: usuario}})
    if (!user){
        return done(null, false, console.log('error de usuario'));
    }
    else{
        const match = await user.validarClave(clave)
        if (match){
            return done (null, user);
        }
        else{
            return done (null, false, console.log('error de contraseña'));
        }
    }
}));

passport.serializeUser((user, done)=>{
    done(null, user.id_usuario);
});

passport.deserializeUser((id_usuario, done)=>{
    Usuarios.findOne(id_usuario, (err, user)=>{
        done(err, user);
    })
});
*/

passport.serializeUser(function(usuario, cb) {
    cb(null, usuario);
  });
  //
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });