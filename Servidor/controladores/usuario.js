
import { Usuarios } from '../models/tablas';

export const guardarUsuario = (req, res) => {
    const { id_usuario, nombre, apellido, correo, telefono, direccion, sexo, usuario, contraseña, barrio } =  req.body
    Usuarios.create({
            id_usuario,
            nombre,
            apellido,
            correo,
            telefono,
            direccion,
            sexo,
            usuario,
            contraseña,
            barrio,
    })
}