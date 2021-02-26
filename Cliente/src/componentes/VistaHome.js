import React from 'react';
export default class VistaHome extends React.Component {

    //state = {
    //    barrios: []
    //}
    // componentDidMount() {
    //     fetch('http://localhost:4000/api/barrios')
    //         .then(res => res.json())
    //         .then(barrios => this.setState({ barrios }))
    // }

    render() {
        //const { barrios } = this.state
        return (
            <div className="container p-4">
                <div className="col-md-8 mx-auto">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="ifts.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="rev-38.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="tapaclasi.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
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