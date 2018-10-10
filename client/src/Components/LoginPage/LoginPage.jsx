import React, { Component } from 'react';
import axios from 'axios';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

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
            <div className="login-form">
                {this.state.user ? (
                    <div className="user-logout">
                        <span className="username">User: {this.state.user.username}</span>
                        <Button color="primary" onClick={this.logout}>Log Out</Button>
                        <Link to="/">start searching</Link>

                    </div>
                ) : (
                    <div className="user-form">
                        <Button color="primary" onClick={this.showSignupForm} disabled={this.state.signupFormVisible}>Register</Button>
                        <Button color="primary" onClick={this.showLoginForm} disabled={!this.state.signupFormVisible}>Login</Button>
                        {this.state.signupFormVisible ? (
                            <form id="registerForm" onSubmit={this.register}>
                                <h2>Register</h2>
                                <div className="form-field">
                                    <label htmlFor="registerUsername">Username:</label>
                                    <input name="registerUsername" type="text" required />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="registerPassword">Password:</label>
                                    <input name="registerPassword" type="password" required />
                                </div>
                                <Button color="primary" type="submit">Register</Button>
                            </form>
                        ) : (
                            <form id="loginForm" onSubmit={this.login}>
                                <h2>Login</h2>
                                <div className="form-field">
                                    <label htmlFor="username">Username:</label>
                                    <input name="username" type="text" required />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="password">Password:</label>
                                    <input name="password" type="password" required />
                                </div>
                                <Button color="primary" type="submit">Login</Button>
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
        .then((res) => {
            sessionStorage.setItem('LoggedIn', true)
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