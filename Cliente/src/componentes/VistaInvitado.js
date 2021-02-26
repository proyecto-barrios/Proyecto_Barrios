import React from 'react';
import {format} from 'timeago.js';
import axios from 'axios'


export default class VistaInvitado extends React.Component{


    state = {
        posteos: [],
        barrios: []
    }

    async componentDidMount() {
        const resp = await axios.get('http://localhost:4000/api/barrios');
        this.setState({
            barrios: resp.data.map(barrio => barrio.nombre_barrio)
        })

        await fetch('http://localhost:4000/api/posteos/')
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
            <div className="container p-8">
                <div className="col-md-8 mx-auto">
                <form className="form-inline">
                    <div className="form-group">
                        <label>Elige el barrio: </label>
                        <select className="form-control">
                        {
                            this.state.barrios.map(barrio => 
                                <option key={barrio} value={barrio}>
                                    {barrio}
                                </option>)
                        }
                        </select>
                    </div>
                        
                    <div className="form-group col-5 mx-auto">
                    <button className="btn btn-primary btn-block" type="submit">Buscar </button>
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
                        <p>{format(posteo.tiempo)}</p>
                        </div>
                        </div>)
                        }                         
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}