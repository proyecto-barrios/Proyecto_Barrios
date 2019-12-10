import React from 'react';
import config from '../config';
import axios from 'axios';
import FormData from 'form-data';

export default class VistaUpload extends React.Component{

    
    state = {
        //texto: '',
        SelectImagen: null
        //fk_id_user: ''
    }

    guardarCampo = event => {
        this.setState({
            //texto: event.target.value,
            //fk_id_user: event.target.value,
            SelectImagen: event.target.files[0],
           // loaded: 0,
        })

    }

    enviarForm = () => {

        const data = new FormData();

        //data.append('texto', this.state.texto);
        data.append('imagen', this.state.SelectImagen);
        //data.append('fk_id_user', this.state.texto);

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
                                <input onChange={this.guardarCampo} type="text" name="texto" placeholder="Texto" className="form-control"></input>
                            </div>
                            
                            <div className="input-group mb-3">
                            <div className="custom-file">
                              <input onChange={this.guardarCampo} type="file" name="imagen" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"></input>
                              <label className="custom-file-label" for="inputGroupFile03">Elegir archivo</label>
                           </div>
                            </div>

                            <div class="form-group">
                               <input onChange={this.guardarCampo} type="text" name="fk_id_user" class="form-control" placeholder="usuario"></input>
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