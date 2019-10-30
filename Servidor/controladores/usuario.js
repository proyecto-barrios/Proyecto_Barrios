
import { Usuarios } from '../models/tablas';

export const guardarUsuario = (req, res) => {
    const { nombre, apellido, correo, telefono, direccion, sexo, usuario, contraseña, barrio } =  req.body
    Usuarios.create({
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            sexo,
            usuario,
            contraseña,
            // barrio: parseInt(barrio),
            barrio,
    })
}