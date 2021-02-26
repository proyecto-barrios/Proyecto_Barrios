import React from 'react';
import config from '../config';
import axios from 'axios';

export default class VistaLogueo extends React.Component{
    
    state = {
        usuario: '',
        clave:''
    }

    onChangeField(field, value){
        this.setState({
            ...this.state,
            [field]: value
        })
    }

    onClickForm(){
        //axios.post('http://localhost:4000/api/logueo')
        // enviar datos a port 4000 y hacer la comparacion con BD
        const body = this.state
        fetch(`${config.api}/api/logueo`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            if (res.ok) {
                //window.location.replace("/Contacto");
                console.log('se envio la info')
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
        return(
            //class="input group animated wobble"></div>
            <div class="container p-4">
                <div class="col-md-4 mx-auto">
                <form method="POST">
                    <div class="form-group">
                        <label>Ingrese su usuario:</label>
                        <input onChange={e => this.onChangeField('usuario', e.target.value)} class="form-control" name="usuario" placeholder="usuario" type="text" required></input>
                    </div>
                    <div class="form-group">
                        <label>Ingrese su contraseña: </label>
                        <input onChange={e => this.onChangeField('clave', e.target.value)} class="form-control" clave="clave" placeholder="contraseña" type="password" required></input>
                    </div>
                    <div class="form-group form-check">
                        <input class="form-check-input" type="checkbox"></input>
                        <label class="form-check-label">Recordar</label>
                    </div>
                    <button onClick={e =>this.onClickForm()} class="btn btn-primary btn-block" type="submit"
                     //onClick={this.enviar}
                     >Enviar</button>
                </form>
                </div>
            </div>
        );
    }
}