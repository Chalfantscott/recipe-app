import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';
import { Route, Switch } from 'react-router-dom'; 
import Tile from './Tile';
import MyRecipes from './MyRecipes';
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';
import WelcomeBackModal from './WelcomeBackModal';

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
          <Link to='./apirecipes'>Explore</Link>
          <Link to='./'>About</Link>
        </div>
        <Switch>
          <Route path='/apirecipes' component={MyRecipes}/>
          <Route path='/login' render={(props) => <LoginPage {...props} setLoggedIn={this.setLoggedIn.bind(this)} setLoggedOut={this.setLoggedOut.bind(this)} />}/>
          <Route path='/' component={LandingPage}/>
          <Route path='/tile' component={Tile}/>
        </Switch>
        <WelcomeBackModal />
        <div className="footer">
          <Link to='./login'>Contact us</Link>
          <Link to='./login'>Help</Link>
          <button onclick={this.setLoggedOut}>This is the button</button>
        </div>
      </div>
    )
  }
}

export default App;
