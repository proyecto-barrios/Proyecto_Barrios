
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