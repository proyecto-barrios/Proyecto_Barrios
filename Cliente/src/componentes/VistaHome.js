import React from 'react';

export default class VistaHome extends React.Component{

    state = {
        barrios:[]
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/barrios')
        .then(res => res.json())
        .then(barrios => this.setState({ barrios }))
    }

    render(){
        const {barrios} = this.state
        return(
            <div class="container p-4">
                <div class="col-md-8 mx-auto">

                {barrios.map(barrio => <p>{barrio}</p>)}

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="ifts16.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                                <img src="rev-38.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                                <img src="tapaclasi.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                <h2>Proposito</h2>
                <p>Brindar información, seguridad y comunicación a todos los vecinos que se encuentren registrados.</p>
                <h2>Visión</h2>
                <p>Ser el principal medio de comunicación e información para barrios con mayoria de usuarios en capital federal</p>
                <h2>Quienes somos</h2>
                <p>Somos un grupo de estudiantes el cual tiene como objetivo unificar toda la información que recorre en cada barrio</p>
            
                </div>
            </div>
        );
    }
}