
import React from 'react';
import InputField from '../global/partials/inputField';

class Form extends React.Component{
    render(){
        return(
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
                            {this.renderForm("user-form","user-input-email","user-input-password")}
                            {this.renderForm("admin-form","admin-input-email","admin-input-password")}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    renderForm(id,emailID,passwordID){
        return(
            <form method="POST" id={id}>
                
                <InputField classes="col s12" type="email" placeholder="Enter your email" id={emailID} 
                required="yes" />
                
                <InputField classes="col s12" type="password" placeholder="Enter your password" id={passwordID} 
                required="yes"/>

                <div className="input-field col s12 l6">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Remember Me</span>
                        </label>
                    </p>
                </div>

                <div className="col s12 l6 forgot-pass-col">
                    <a className="btn-flat modal-trigger" href="#forget-password">Forgot Password?</a>
                </div>

                <div className="input-field col s12" >
                    <button type="submit" className="btn btn-large btn-primary">
                    Login
                    </button>
                    <button type="button" className="btn btn-large btn-secondary" onClick={this.handleClick}>
                    Cancel
                    </button>
                </div>


            </form>
        )
    }

    handleClick(){
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems,(elem)=>{
            elem.value = null;
        });
    }

}

export default Form;