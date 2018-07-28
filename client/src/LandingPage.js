import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
       /* <div className="header">
                <Link to='/myrecipes'>My Recipe Book</Link>
                <Link to='/apirecipes'>Search for New Recipes</Link>
            </div>
            <div className="main-content">
                <h1></h1>
            </div>
            <div className="about-content">
                <h1></h1>
            </div>
            <div className="other-div">
                <h1></h1>
            </div>
        */
        return (
        <div className="LandingPage-container">
            <img src={require("./gabriel-gurrola-57458-unsplash.jpg")} alt="background_picture" className="backgroundimage"/>
            <div className="text-block">
                <h1>SLOSH/NOSH:<br/>A RECIPE SHARING APPLICATION</h1>
            </div>

        </div>
        )
    }
}

export default LandingPage;