import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VistaHome from './componentes/VistaHome';
import VistaLogueo from './componentes/VistaLogueo';
import VistaRegistro from './componentes/VistaRegistro';
import VistaInvitado from './componentes/VistaInvitado';
import VistaContacto from './componentes/VistaContacto';
import VistaUpload from './componentes/VistaUpload';
// se suprime pero aun no se elimina para empezar de cero import './App.css';

class App extends Component {

  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h2 className="navbar-brand">FreeCity</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li><Link exact className="nav-link" to='/' ><i className="fas fa-home icon"></i> Inicio</Link></li>
                            <li><Link className="nav-link" to='/Logueo'><i className="fas fa-user icon"></i> Iniciar Sesion</Link></li>
                            <li><Link className="nav-link" to='/Registro'><i className="fas fa-address-book icon"></i> Registro</Link></li>
                            <li><Link className="nav-link" to='/Invitado'><i className="fas fa-user-secret icon"></i> Invitado</Link></li>
                            <li><Link className="nav-link" to='/Contacto'><i className="fas fa-envelope icon"></i> Contactenos</Link></li>
                            <li><Link className="nav-link" to='/SubirImagen'><i className="fas fa-image icon"></i> Subir imagen</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
      </header>
    </div>
    <Switch>
      <Route exact path='/' component={VistaHome}></Route>
      <Route path='/logueo' component={VistaLogueo}></Route>
      <Route path='/Registro' component={VistaRegistro}></Route>
      <Route path='/Invitado' component={VistaInvitado}></Route>
      <Route path='/Contacto' component={VistaContacto}></Route>
      <Route path='/SubirImagen' component={VistaUpload}></Route>
    </Switch>
    </Router>
  );
  }
}

export default App;
