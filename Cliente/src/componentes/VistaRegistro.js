import React from 'react';

export default class VistaRegistro extends React.Component{
    render(){
        return(
            <div class="jumbotron animated tada">
                <h1>Ingrese sus datos para el registro</h1>
                <input placeholder="nombre" type="nombre"></input>
                <input placeholder="apellido" type="apellido"></input>
            </div>
        );
    }
}