import React from 'react';

export default class VistaLogueo extends React.Component{
    enviar = () => {
        this.props.history.push("/")
    }
    render(){
        return(
            //class="input group animated wobble"></div>
            <div class="container p-4">
                <div class="col-md-4 mx-auto">
                <form>
                    <div class="form-group">
                        <label>Ingrese su usuario:</label>
                        <input class="form-control" placeholder="usuario" type="user" required></input>
                    </div>
                    <div class="form-group">
                        <label>Ingrese su contraseña: </label>
                        <input class="form-control" placeholder="contraseña" type="password" required></input>
                    </div>
                    <div class="form-group form-check">
                        <input class="form-check-input" type="checkbox"></input>
                        <label class="form-check-label">Recordar</label>
                    </div>
                    <a href="#">Es nuevo aqui? Registrese</a><br/>
                    <a href="#">Olvido su contraseña ?</a>
                    <button class="btn btn-primary btn-block" type="submit"
                     //onClick={this.enviar}
                     >Enviar</button>
                </form>
                </div>
            </div>
        );
    }
}