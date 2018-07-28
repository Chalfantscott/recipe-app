import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage.js';
import Login from './Login.js';
import { Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/Home' component={LandingPage}/>
        </Switch>

      </div>
    )
  }
}

export default App;
