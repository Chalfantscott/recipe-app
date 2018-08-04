import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage.js';
import { Route, Switch } from 'react-router-dom'; 
import Tile from './Tile.js';
import MyRecipes from './MyRecipes.js';
import Login2 from './login.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/apirecipes' component={MyRecipes}/>
          <Route path='/login' component={Login2}/>
          <Route path='/' component={LandingPage}/>
          <Route path='/tile' component={Tile}/>
        </Switch>

      </div>
    )
  }
}

export default App;
