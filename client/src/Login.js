
import React, { Component } from 'react';
import './Login.css';
import { Button, FormGroup } from 'react-bootstrap';



class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: null,
            signupFormVisible: false,
        };   
    }

    handleOnClick = (event) => {

        let email = document.getElementById('InputEmail').value
        let fullname = document.getElementById('InputFullname').value
       
        console.log(email, fullname);
    }

    render() {
        return (
                <div className="Login-background">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                    <div className="login-tile">
                                        <div className="login-icon"><h6>SLOSH <br/>AND <br/>NOSH</h6></div>
                                        <Button bsStyle="primary">Log in with Github</Button>
                                        <h5>———— or ————</h5>
                                        <FormGroup>
                                            <input type="username" name="username" id="InputUsername" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type="password" name="password" id="InputPassword" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                                        </FormGroup>
                                        <Button bsStyle="primary" onClick={(event) => this.handleOnClick(event)}>Sign up</Button>
                                    </div>
                                    <div className="login-tile">
                                        <h5>Already have an account?</h5>
                                        <Button bsStyle="primary">Login</Button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Login;
