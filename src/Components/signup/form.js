import React from 'react';
import {Link} from 'react-router-dom';
import InputField from '../global/partials/inputField';
import LoginComponent from '../../screen/Login/LoginComponent';

class Form extends React.Component{
    render(){
        return(
            <div className="container-fluid form-page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>register account</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <form method="POST">
                                <InputField type="text" placeholder="Enter your name" id="input-name" required="yes" classes="col s12" />
                                <InputField type="email" placeholder="Enter your email address" id="input-email" required="yes" classes="col s12" />
                                <InputField type="password" placeholder="Password" id="input-password" required="yes" classes="col s12" />
                                <InputField type="password" placeholder="Confirm Password" id="input-password-confirm" required="yes" classes="col s12" />
                                <div className="input-field col s12">
                                    <button type="submit" className="btn btn-large btn-primary" >
                                    register
                                    </button>
                                    <button type="button" className="btn btn-large btn-secondary" style={{marginLeft: "5%"}}>
                                    cancel
                                    </button>
                                </div>
                                <div className="input-field col s12">
                                    <Link className="btn-flat" to="/login" component={LoginComponent}>
                                        already have an account?
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;