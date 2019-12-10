
import { Correos } from '../models/tablas';

export const guardarCorreo = (req, res) => {
    const { nombre, apellido, correo, telefono, motivo, mensaje } =  req.body
    Correos.create({
            nombre,
            apellido,
            correo,
            telefono,
            motivo,
            mensaje,
           
    })
}