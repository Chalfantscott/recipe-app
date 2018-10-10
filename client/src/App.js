import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './Containers/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom'; 
import LoginPage from './Components/LoginPage/LoginPage';
import { Link } from 'react-router-dom';
import SaveRecipe from './Components/SaveRecipe/SaveRecipe';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
  }
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
          <Link to="/saverecipe">My Recipe Book</Link>
        </div>
        <Switch>
        <Route path='/login' render={(props) => <LoginPage {...props} setLoggedIn={this.setLoggedIn.bind(this)} setLoggedOut={this.setLoggedOut.bind(this)} />}/>
        <Route path='/saverecipe' component={SaveRecipe} />
        <Route path='/' component={LandingPage}/>
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
