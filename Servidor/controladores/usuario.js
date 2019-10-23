
import { Usuarios } from '../models/tablas';

export const guardarUsuario = (request) => {
    const { nombre, apellido, correo, telefono, direccion, sexo, usuario, contraseña, barrio } =  request.body
    Usuarios.create({
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