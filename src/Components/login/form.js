import React from 'react';
import InputField from '../global/partials/inputField';
import bcrypt from 'bcryptjs';
import { withRouter } from "react-router-dom";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    login(event) {
        event.preventDefault();
        var Email = document.getElementsByTagName('input')[1].value;
        var Password = document.getElementsByTagName('input')[2].value;

        fetch('http://localhost:4000/login')
            .then(data => {
                var db = data.json();
                return db;
            }).then(db => {
                var user_email = db[0].email;
                var user_password = db[0].password;

                bcrypt.compare(Password, user_password).then(res => {
                    if (user_email === Email && res) {
                            alert("success","successfull!!");
                            this.props.history.push('/');
                        } else { 
                            alert('credential error')
                            this.handleClick();
                            this.props.history.push('/login');
                    }
                })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container-fluid form-page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>Account login</h3>
                            <div className="divider"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="row">
                                <div className="col s12">
                                    <ul className="tabs">
                                        <li className="tab col s12 m6 l4 offset-l2">
                                            <a href="#user-form">User Login</a>
                                        </li>
                                        <li className="tab col s12 m6 l4 offset-l2">
                                            <a href="#admin-form">
                                                Admin Login
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12"> 
                       
                            {this.renderForm("user-form", "user-input-email", "user-input-password")}
                            {this.renderForm("admin-form", "admin-input-email", "admin-input-password")}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderForm(id, emailID, passwordID) {
        return (
            <form id={id}>
                   
                <InputField classes="col s12"
                    type='email'
                    name='email'
                    placeholder="Enter your email" id={emailID}
                    required="yes" />

                <InputField classes="col s12"
                    type='password'
                    name='password'
                    placeholder="Enter your password" id={passwordID}
                    required="yes" />

                <div className="input-field col s12" >
                    <button className="btn btn-large btn-primary" onClick={this.login}>
                        Login
                    </button>
                    <button className="btn btn-large btn-secondary"
                    style={{marginLeft: "5%"}}
                    onClick={this.handleClick}>
                        Cancel
                    </button>
                </div>
                <div className="col s12 l6 forgot-pass-col">
                    <a className="btn-flat modal-trigger" href="#forget-password">Forgot Password?</a>
                </div>


            </form>
        )
    }

    handleClick() {
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems, (elem) => {
            elem.value = null;
        });
    }

}

export default withRouter(Form);