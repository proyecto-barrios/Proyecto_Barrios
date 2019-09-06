import React from 'react';

export default class VistaLogueo extends React.Component{
    enviar = () => {
        this.props.history.push("/")
    }
    render(){
        return(
            <div class="jumbotron animated wobble">
                <form>
                    <input placeholder="user" type="user"></input>
                    <input placeholder="password" type="password"></input>
                    <button onClick={this.enviar}>Enviar</button>
                </form>
            </div>
        );
    }
}