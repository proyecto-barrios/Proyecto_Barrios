import React from 'react';

export default class VistaMenu extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container">
                    <a class="navbar-brand" href="#">FreeCity</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li>
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">Iniciar Sesion</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">Registrarse</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">Invitado</a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}