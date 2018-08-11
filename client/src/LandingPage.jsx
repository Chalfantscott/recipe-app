import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
<<<<<<< HEAD:client/src/LandingPage.jsx
=======
import Login2 from './login.jsx';
>>>>>>> 21fc35ad318f9a5374581798ca2ffcefdb2289c8:client/src/LandingPage.js
import Tile from './Tile';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            tiles: [
                {
                    title: 'Find Recipes',
                    icon: <img src={require("./search.png")} alt="Find" />
                },
                {
                    title: 'Share Recipes',
                    icon: <img src={require("./management.png")} alt="Share" />
                },
                {
                    title: 'Save Recipes',
                    icon: <img src={require("./writing.png")} alt="Save" />
                }
            ]
        }
    }

    render() {
        return (
        <div>
            <div className="LandingPage-container">
<<<<<<< HEAD:client/src/LandingPage.jsx
                <div className="homepage-header">
=======
                <div className="header">
                    <Link to='./login' Component={Login2}>Sign up</Link>
                    <Link to='./login' Component={Login2}>Login</Link>
                </div>
                
                    <img src={require("./brooke-lark-385507-unsplash.jpg")} alt="background_picture" className="backgroundimage"/>
>>>>>>> 21fc35ad318f9a5374581798ca2ffcefdb2289c8:client/src/LandingPage.js
                    <div className="text-block">
                        <h1 id="App-Name">Like Mama Made</h1>
                        <h1 id="App-Name-Subtitle">a recipe sharing application</h1>
                    </div>
                </div>
                
                <div className="tiles">
                    {this.state.tiles.map(tile => 
                    <Tile data={tile} />
                    )}
                </div>
                <div className="introduction">
                    <div className="container">
                        <div className="row" id="introduction-row">
                            <div className="col-6" id="introduction-left">
                                <h1>What is Slosh and Nosh?</h1>
                            </div>
                            <div className="col-6" id="introduction-right">
                                <h3>Like Mama Made is a modern-day recipe-sharing application that allows users to share and store their recipes in a more convenient place.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default LandingPage;