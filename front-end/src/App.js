import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './componentes/navigation'

function App() {
  return (
    <Router>
      <Route path= "/" component={Navigation}/>
    </Router>
  );
}

export default App;
