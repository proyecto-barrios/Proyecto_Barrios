import { Posteos } from '../models/tablas';

const b = require('based-blob');


export const listarPosteos = () => {
    return Posteos.findAll({ attributes: ['id_posteo', 'texto', 'imagen', 'fk_id_user', 'tiempo']})
        .then(posteos => {
            const p = posteos.map(post => {
                var buffer = new Buffer( post.imagen );
                var bufferBase64 = buffer.toString('base64');
                return {
                    id_posteo: post.id_posteo,
                    texto: post.texto,
                    imagen: bufferBase64,
                    fk_id_user: post.fk_id_user,
                    tiempo: post.tiempo,
                };
            })
            return p;
        });
};

export const guardarPosteo = (req, res) =>{
   // const { texto, imagen, fk_id_user } = req.body;
    Posteos.create({
        texto: req.body.texto,
        imagen: req.file.buffer,
        fk_id_user: req.body.fk_id_user,
    })
}