import React from 'react';
import config from '../config';

export default class VistaInvitado extends React.Component{


    state = {
        posteos: [],
        texto: '',
        imagen: '',
        fk_id_user: '',
        error: false
    }

    guardarCampo(campo, valor){
        this.setState({
            ...this.state,
            [campo]: valor
        })
        console.log(this.state);
    }


    enviarForm(){
        const body = this.state
        fetch(`${config.api}/api/usuario`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {"Content-Type": "application/json"}
        })
        .then(res =>{
            if (res.ok){
                window.location.replace("/Invitado");
            }
            else{
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

        return(
            <div class="container p-8">
                <div class="col-md-8 mx-auto">
                <form class="form-inline">
                    <div class="form-group">
                        <label>Elige el barrio: </label>
                        <select class="form-control">
                            <option selected>...</option>
                            <option value="1">Versailles</option>
                            <option value="2">Monte Castro</option>
                            <option value="3">Villa Luro</option>
                            <option value="4">Liniers</option>
                        </select>
                    </div>
                        
                    <div class="form-group col-5 mx-auto">
                    <button class="btn btn-primary btn-block" type="submit">Buscar </button>
                    </div>
                </form>
                </div>

                <div className= "container p-4">
                    <div className="row">
                        <div className="card-columns">
                        {
                        posteos.map(posteo => 
                        <div className="card">
                        <img src={'data:' + this.getImageMimeType('png') + '};charset=utf-8;base64, ' + posteo.imagen} alt="" className="card-img-top"/>
                        <div className="card-body">    
                        <p>{posteo.texto}</p>
                        <mark>by - Usuario {posteo.fk_id_user}</mark>
                        </div>
                        </div>)
                        }                         
                        </div>
                    </div>
                </div>


                <div className= "row">
                <div className ="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form action="/" method="POST" encType="multipart/form-data">
                                <div className="form-group">
                                    <input onChange={e=> this.guardarCampo('texto', e.target.value)} type="text" name="texto" placeholder="Texto" className="form-control"></input>
                                </div>
                                
                                <div className="input-group mb-3">
                                <div className="custom-file">
                                  <input onChange={e=> this.guardarCampo('imagen', e.target.value)} type="file" name="imagen" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"></input>
                                  <label className="custom-file-label" for="inputGroupFile03">Elegir archivo</label>
                               </div>
                                </div>

                                <div class="form-group">
                                   <input onChange={e=> this.guardarCampo('fk_id_user', e.target.value)} type="text" name="fk_id_user" class="form-control" placeholder="usuario"></input>
                                </div>
                                <div class="form-group">
                                   <button onClick={e => this.enviarForm()} type="submit" name="submitI" class="btn btn-success btn-block">Postear</button>
                                 </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>


            </div>
        );
    }
}