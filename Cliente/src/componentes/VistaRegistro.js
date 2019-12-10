import React from 'react';
import config from '../config'

export default class VistaRegistro extends React.Component{
    state = {
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        direccion: '',
        sexo: '',
        usuario: '',
        clave: '',
        barrio: '',
        error: false

    }
    saveField(field, value) {
        this.setState({
            ...this.state,
            [field]: value
        })
        console.log(this.state);
    }

    submitForm() {
        const body = this.state
        fetch(`${config.api}/api/usuario`, {
            method: 'POST',
            // faltaba agregar stringifi y headers
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            if (res.ok) {
                window.location.replace("/Logueo");
                //no funciona por el import ?? -> this.props.history.push('/Logueo');
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

        return(
            <div class="container p-4">
                <div class="col-md-8 mx-auto">

                <form method="POST">

                    {error && <p>Ups! Algo ha salido mal intenta nuevamente</p>}

                    <div class="form-group col-5">
                        <label>Nombre:</label>
                        <input onChange={e => this.saveField('nombre', e.target.value)} name="nombre" class="form-control" placeholder="Ingresa tu nombre.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Apellido:</label>
                        <input onChange={e => this.saveField('apellido', e.target.value)} name="apellido" class="form-control" placeholder="Ingresa tu apellido.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Correo electrónico:</label>
                        <input onChange={e => this.saveField('correo', e.target.value)} name="correo" class="form-control" placeholder="Ingresa tu correo.." type="email" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Número telefónico:</label>
                        <input onChange={e => this.saveField('telefono', e.target.value)} name="telefono" class="form-control" placeholder="Ingresa tu numero.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Domicilio:</label>
                        <input onChange={e => this.saveField('direccion', e.target.value)} name="direccion" class="form-control" placeholder="Ingresa tu direccion.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Elige tu barrio:</label>
                        <select onChange={e => this.saveField('barrio', e.target.value)} name="barrio" class="form-control">
                            <option selected>...</option>
                            <option value="30">Monte Castro</option>
                            <option value="28">Villa Luro</option>

                        </select>
                    </div>
                    <label>Seleccione el sexo:</label><br/>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={e => this.saveField('sexo', e.target.value)} type="radio" id="M" name="sexo" class="custom-control-input" value="1"></input>
                        <label class="custom-control-label" for="M">Masculino</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input onChange={e => this.saveField('sexo', e.target.value)} type="radio" id="F"name="sexo" class="custom-control-input" value="0"></input>
                        <label class="custom-control-label" for="F">Femenino</label>
                    </div>
                    <div class="form-group col-5">
                        <label>Crear usuario:</label>
                        <input onChange={e => this.saveField('usuario', e.target.value)} name="usuario" class="form-control" placeholder="Ingrese usuario.." type="text" required></input>
                    </div>
                    
                    <div class="form-group col-5">
                        <label>Crear clave: </label>
                        <input onChange={e => this.saveField('clave', e.target.value)} name="clave" class="form-control" placeholder="Ingrese clave.." type="password" required></input>
                        
                    </div>
                    
                    <div class="form-group col-4 mx-auto">
                    <button name="submit" class="btn btn-primary btn-block" onClick={e =>this.submitForm()}>Registrarse</button>
                    </div>
                    <p>* Una vez creada la cuenta usted recibirá un correo para validar la misma siguiendo el link recibido.</p>
                </form>
                </div>
            </div>
        );
    }
}