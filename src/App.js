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
import PageNotFound from "./pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/inte-srh" component={ Homepage } />
          <Route exact path="/404" component={ PageNotFound } />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
