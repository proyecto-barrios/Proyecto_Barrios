import React from 'react';
import config from '../config';
export default class VistaContacto extends React.Component{

    state = {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        motivo: '',
        mensaje: '',
        error: false
    }

    saveCampo(field, value){
        this.setState({
            ...this.state,
            [field]: value
        })
        //console.log(this.state);
    }

    enviarForm() {
        const body = this.state
        fetch(`${config.api}/api/correo`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            if (res.ok) {
                window.location.replace("/Contacto");
            } else {
                this.setState({
                    ...this.state,
                    error: true
                })
            }
        })
        .catch(err => {
            this.setState({
                ...this.state,
                error: true
            })
        })
    }

    render(){
        const { error } = this.state;
        // cambiar el dato en jpg para que luego agregue en case los distintos tipos de imagenes
        // cambiar en getimagetype () el png y jpg para probar
        // en invitado mostrar por id en parametro de el name y que muestre las img de ese barrio
        return(
            <div class="container p-8">
                <div class="col-md-8 mx-auto">
                <form method="POST">
                {error && <p>Ups! Algo ha salido mal intenta nuevamente</p>}
                    <div class="form-group col-5">
                        <label>Nombre:</label>
                        <input onChange={e => this.saveCampo('nombre', e.target.value)} class="form-control" name="nombre" placeholder="Ingresa tu nombre.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Apellido:</label>
                        <input onChange={e => this.saveCampo('apellido', e.target.value)} class="form-control" name="apellido" placeholder="Ingresa tu apellido.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Correo electrónico:</label>
                        <input onChange={e => this.saveCampo('correo', e.target.value)} class="form-control" name="correo" placeholder="Ingresa tu correo.." type="email" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Número telefónico:</label>
                        <input onChange={e => this.saveCampo('telefono', e.target.value)} class="form-control" name="telefono" placeholder="Ingresa tu numero.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Elige motivo:</label>
                        <select onChange={e => this.saveCampo('motivo', e.target.value)} class="form-control" name="motivo">
                            <option selected>...</option>
                            <option value="1">Configuracion</option>
                            <option value="2">Clasificados</option>
                            <option value="3">Publicidad</option>
                            <option value="4">Contacto</option>
                        </select>
                    </div>
                        <div class="form-group">
                            <label>Escribe tu mensaje:</label>
                            <textarea onChange={e => this.saveCampo('mensaje', e.target.value)} class="form-control" rows="3" name="mensaje" type="text"></textarea>
                        </div>
                    <div class="form-group col-5 mx-auto">
                    <button onClick={e =>this.enviarForm()} class="btn btn-primary btn-block" name="enviar" type="submit">Enviar</button>
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