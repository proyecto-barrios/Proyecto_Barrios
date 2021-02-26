import React from 'react';
import config from '../config';
import axios from 'axios';
import FormData from 'form-data';

export default class VistaUpload extends React.Component{

    
    state = {
        texto: '',
        SelectImagen: null,
        usuarios: []
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:4000/api/usuario');
        this.setState({
            usuarios: resp.data.map(usuario => usuario  )
        })
    }

    guardarCampo = campo => event => {
        if (campo === 'texto') {
            this.setState({
                ...this.state,
                texto: event.target.value,
            })
            return
        }

        if (campo === 'imagen') {
            this.setState({
                ...this.state,
                SelectImagen: event.target.files ? event.target.files[0] : null,
            })
            return
        }

        if (campo === 'fk_id_user') {
            this.setState({
                ...this.state,
                fk_id_user: event.target.value,
            })
            return
        }

    }

    enviarForm = () => {

        const data = new FormData();

        data.append('texto', this.state.texto);
        data.append('imagen', this.state.SelectImagen);
        data.append('fk_id_user', this.state.fk_id_user);

        axios.post("http://localhost:4000/api/posteos/",data, {

        })
        .then(res => {
            console.log(res.statusText);
        })

    }


    /*enviar = () => {
        this.props.history.push("/")
    }*/
    render(){
        return(
            //class="input group animated wobble"></div>
            <div className= "row">
            <div className ="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <form method="POST" encType="multipart/form-data" >
                            <div className="form-group">
                                <input onChange={this.guardarCampo('texto')} type="text" name="texto" placeholder="Texto" className="form-control"></input>
                            </div>
                            
                            <div className="input-group mb-3">
                            <div className="custom-file">
                              <input onChange={this.guardarCampo('imagen')} type="file" name="imagen" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"></input>
                              <label className="custom-file-label" for="inputGroupFile03">Elegir archivo</label>
                           </div>
                            </div>

                           

                            <div class="form-group col-5">
                            <label>Usuario:</label>
                            <select onChange={e => this.guardarCampo('fk_id_user', e.target.value)} name="fk_id_user" class="form-control">
                                {
                                    this.state.usuarios.map(usuario => 
                                        <option key={usuario} value={usuario.id_usuario}>
                                            {usuario.nombre}
                                        </option>)
                                }
                            </select>
                            </div>



                            <div class="form-group">
                               <button onClick={this.enviarForm} type="button" name="submitI" class="btn btn-success btn-block">Postear</button>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}