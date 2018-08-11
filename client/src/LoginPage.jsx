import React, { Component } from 'react';
import axios from 'axios';
import './login2.css';
import { Button } from 'react-bootstrap';


class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            user: null,
            signupFormVisible: false,
        };
    }

    render() {
        return (
        <div className="login2-background-container">
            <img src={require("./brooke-lark-385507-unsplash.jpg")} alt="background_picture" className="backgroundimage-login"/>
            <div className="login-form">
                {this.state.user ? (
                    <div className="user">
                        <span className="username">User: {this.state.user.username}</span>
                        <button onClick={this.logout}>Log Out</button>
                    </div>
                ) : (
                    <div className="user-form">
                        <button onClick={this.showSignupForm} disabled={this.state.signupFormVisible}>Register</button>
                        <button onClick={this.showLoginForm} disabled={!this.state.signupFormVisible}>Login</button>
                        {this.state.signupFormVisible ? (
                            <form id="registerForm" onSubmit={this.register}>
                            <div className="login-icon"><h6>SLOSH <br/>AND <br/>NOSH</h6></div>
                                <h2>Register</h2>
                                <div className="form-field">
                                    <label htmlFor="registerUsername">Username:</label>
                                    <input name="registerUsername" type="text" required />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="registerPassword">Password:</label>
                                    <input name="registerPassword" type="password" required />
                                </div>
<<<<<<< HEAD:client/src/LoginPage.jsx
                                <button type="submit">Register</button>
=======
                                <button className="btn btn-primary" type="submit">Register</button>
>>>>>>> 21fc35ad318f9a5374581798ca2ffcefdb2289c8:client/src/login.jsx
                            </form>
                        ) : (
                            <form id="loginForm" onSubmit={this.login}>
                                <div className="login-icon"><h6>SLOSH <br/>AND <br/>NOSH</h6></div>
                                <h2>Login</h2>
                                <div className="form-field">
                                    <label htmlFor="username">Username:</label>
                                    <input name="username" type="text" required />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="password">Password:</label>
                                    <input name="password" type="password" required />
                                </div>
<<<<<<< HEAD:client/src/LoginPage.jsx
                                <button type="submit">Login</button>
=======
                                <button className="btn btn-primary" type="submit">Login</button>
>>>>>>> 21fc35ad318f9a5374581798ca2ffcefdb2289c8:client/src/login.jsx
                            </form>
                        )}
                    </div>
                )
                }
            </div>
        </div>
        );
    }

    showLoginForm = (event) => {
        this.setState({
            signupFormVisible: false,
        })
    }

    showSignupForm = (event) => {
        this.setState({
            signupFormVisible: true,
        })
    }

    register = (event) => {
        console.log('test');
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/signup',
            data: {
                username: event.target.registerUsername.value,
                password: event.target.registerPassword.value,
            }
        })
            .then((res) => {
                this.showLoginForm();
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            });
    }

    login = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username: event.target.username.value,
                password: event.target.password.value,
            }
        })
        .then((res) => {
            this.setState({
                user: res.data.user,
                showSignupForm: false,
            })
            this.props.setLoggedIn(res.data.user)
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        });
    }

    logout = () => {
        axios({
            method: 'get',
            url: '/auth/logout'
        })
        .then(() => {
            this.setState({
                user: null,
            })
            this.props.setLoggedOut()
        })
        .catch((res) => {
            console.log(res);
        });
    }
}

export default LoginPage;