import React from 'react';

export default class VistaContacto extends React.Component{
    render(){
        return(
            <div class="container p-8">
                <div class="col-md-8 mx-auto">
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