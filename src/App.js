import React, { Component } from 'react'
import './css/flexboxgrid2.css'
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import Homepage from "./pages/index";
import ModelesPage from "./pages/modeles";
import MajPage from "./pages/maj";
import FavorisPage from "./pages/favoris";
import Recrutement from "./pages/recrutement";
import PageNotFound from "./pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/modeles" component={ ModelesPage }/>
          <Route exact path="/mises-a-jour" component={ MajPage }/>
          <Route exact path="/favoris" component={ FavorisPage }/>
          <Route exact path="/theme/Recrutement-embauche" component={ Recrutement } />
          <Route path="/404" component={ PageNotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
