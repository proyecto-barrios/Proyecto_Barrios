import React from 'react';

export default class VistaInvitado extends React.Component{


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





            </div>
        );
    }
}