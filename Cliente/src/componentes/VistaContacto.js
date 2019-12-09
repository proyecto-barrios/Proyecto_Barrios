import React from 'react';
import config from '../config';
export default class VistaContacto extends React.Component{

    state = {
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
        fetch(`${config.api}/api/posteos`, {
            method: 'POST',
            body:(body)
        })
        .then(res =>{
            if (res.ok){
                //window.location.replace("/Invitado");
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
        });
        return false;
    }

    render(){
        // cambiar el dato en jpg para que luego agregue en case los distintos tipos de imagenes
        // cambiar en getimagetype () el png y jpg para probar
        // en invitado mostrar por id en parametro de el name y que muestre las img de ese barrio
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
                                   <button onClick={e => this.enviarForm()} type="button" name="submitI" class="btn btn-success btn-block">Postear</button>
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