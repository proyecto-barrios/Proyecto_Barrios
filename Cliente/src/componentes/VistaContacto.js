import React from 'react';

export default class VistaContacto extends React.Component{

    state = {
        posteos: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/posteos/')
            .then(res => res.json())
            .then(posteos => this.setState({ posteos }))
    }

    getImageMimeType(type) {
        switch(type) {
            case 'jpg' :
                    return 'image/jpg';
            case 'jpeg' :
                    return 'image/jpeg';
        }
    }

    render(){
        const { posteos } = this.state;
        // cambiar el dato en jpg para que luego agregue en case los distintos tipos de imagenes
        // cambiar en getimagetype () el png y jpg para probar
        // en invitado mostrar por id en parametro de el name y que muestre las img de ese barrio
        return(
            <div class="container p-8">
                <div class="col-md-8 mx-auto">
                    {posteos.map(posteo => <div>

                        <img src={'data:'+this.getImageMimeType('png')+'};charset=utf-8;base64, ' + posteo.imagen} alt=""/> 
                        <p>{posteo.texto}</p>
                        <mark>by - Usuario {posteo.fk_id_user}</mark>
                    </div>)}
                <form>
                    <div class="form-group col-5">
                        <label>Nombre:</label>
                        <input class="form-control" placeholder="Ingresa tu nombre.." type="user" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Apellido:</label>
                        <input class="form-control" placeholder="Ingresa tu apellido.." type="user" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Correo electrónico:</label>
                        <input class="form-control" placeholder="Ingresa tu correo.." type="user" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Número telefónico:</label>
                        <input class="form-control" placeholder="Ingresa tu numero.." type="user" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Elige motivo:</label>
                        <select class="form-control">
                            <option selected>...</option>
                            <option value="1">Configuracion</option>
                            <option value="2">Clasificados</option>
                            <option value="3">Publicidad</option>
                            <option value="4">Contacto</option>
                        </select>
                    </div>
                        <div class="form-group">
                            <label>Escribe tu mensaje:</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    <div class="form-group col-5 mx-auto">
                    <button class="btn btn-primary btn-block" type="submit">Enviar</button>
                    </div>
                </form>
                <p>*Direccion: Lascano 4424, CABA</p>
                <p>*Telefono: 4639-6209</p>
                <p>*Email: contacto@freecity.com.ar</p>
                </div>
            </div>
        );
    }
}