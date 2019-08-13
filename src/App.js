import React, {Component} from 'react';
import VistaTitulo from './componentes/VistaTitulo';
import VistaProposito from './componentes/VistaProposito';
import VistaMenu from './componentes/VistaMenu';
// se suprime pero aun no se elimina para empezar de cero import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App container">
      <header className="App-header">
        <VistaTitulo></VistaTitulo>
        <VistaMenu></VistaMenu>
        <div className = "jumbotron">
        <VistaProposito></VistaProposito>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
