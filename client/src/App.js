import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import { Route, Switch } from 'react-router-dom'; 
import Tile from './Tile.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/Home' component={LandingPage}/>
          <Route path='/Tile' component={Tile}/>
        </Switch>

      </div>
    )
  }
}

export default App;
