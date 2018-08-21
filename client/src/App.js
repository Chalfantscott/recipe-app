import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';
import { Route, Switch } from 'react-router-dom'; 
import Tile from './Tile';
import MyRecipes from './MyRecipes';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';
import About from './About.js';
import SaveRecipe from './SaveRecipe';

class App extends Component {
  setLoggedIn(user) {
    this.setState({
      loggedIn: user
    })
  }
  setLoggedOut() {
    this.setState({
      loggedIn: false
    })
  }

  render() {

    return (
      <div className="App">
        <div className="main-header">
          <h2 className="app-title-header">Like Mama Made</h2>
          <Link to='./apirecipes'>Explore</Link>
          <Link to='./about'>About</Link>
        </div>
        <Switch>
          <Route path='/saverecipe' component={SaveRecipe} />
          <Route path='/about' component={About}/>
          <Route path='/apirecipes' component={MyRecipes}/>
          <Route path='/login' render={(props) => <LoginPage {...props} setLoggedIn={this.setLoggedIn.bind(this)} setLoggedOut={this.setLoggedOut.bind(this)} />}/>
          <Route path='/' component={LandingPage}/>
          <Route path='/tile' component={Tile}/>
        </Switch>
        <div className="footer">
          <Link to='./login'>Contact us</Link>
          <Link to='./login'>Help</Link>
        </div>
      </div>
    )
  }
}


export default App;
