import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './componentes/navigation'
import home from "./componentes/home"
import subir from './componentes/subir';

function App() {
  return (
    
    <Router>
      <Navigation/>
      <Route exact path= "/" component={home}/>
      <Route exact path= "/subir" component={subir}/>
    </Router>
  );
}

export default App;
