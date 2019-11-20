import { posteos } from '../models/tablas';
/*
export const Posteos = () => {
state = {
    posteos: posteos
}
const posteos = this.state.posteos.map((row, i)=>{


return(

<div className="col-md-3">
    <div className="card text-center">
        <div className="card-body">
            <p>{row.texto}</p>
            <p>{row.fk_id_user}</p>
            <p>asd</p>
            
        </div>
    </div>
</div>
)
})
}*/

import { Posteos } from '../models/tablas';

const b = require('based-blob');


export const listarPosteos = () => {
    return Posteos.findAll({ attributes: ['id_posteo', 'texto', 'imagen', 'fk_id_user']})
        .then(posteos => {
            const p = posteos.map(post => {
                var buffer = new Buffer( post.imagen );
                var bufferBase64 = buffer.toString('base64');
                return {
                    id_posteo: post.id_posteo,
                    texto: post.texto,
                    imagen: bufferBase64,
                };
            })
            return p;
        });
};