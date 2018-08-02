import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import { Route, Switch } from 'react-router-dom'; 
import Tile from './Tile.js';
import MyRecipes from './MyRecipes';
import RecipeBook from './RecipeBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={LandingPage}/>
          <Route path='/tile' component={Tile}/>
          <Route path='/apirecipes' component={MyRecipes} />
          <Route path='/myrecipebook' component={RecipeBook}/>
        </Switch>

      </div>
    )
  }
}

export default App;
