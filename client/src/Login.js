import React, { Component } from 'react';
import './Login.css';
import { Button, FormGroup } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-header-left">
                    <img src={require("./katie-smith-104748-unsplash.jpg")} alt="background_picture" className="login-backgroundimage"/>
                </div>
                    <div className="login-tile-border">
                        <div className="login-tile">
                            <div className="login-icon"><h6>SLOSH <br/>AND <br/>NOSH</h6></div>
                            <FormGroup>
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter Email"></input>
                            </FormGroup>
                            <FormGroup>
                                <input type="Full Name" className="form-control" id="InputFullname" aria-describedby="emailHelp" placeholder="Enter Full Name"></input>
                            </FormGroup>
                            <FormGroup>
                                <input type="Username" className="form-control" id="InputUsername" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                            </FormGroup>
                            <FormGroup>
                                <input type="password" className="form-control" id="InputPassword" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                            </FormGroup>
                <Button bsStyle="primary" onClick={() => alert("figure this out")}>Sign up</Button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Login;
