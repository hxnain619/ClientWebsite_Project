
import React from 'react';
import InputField from '../global/partials/inputField';

class ForgetPasswordModal extends React.Component{
    render(){
        return(
            <div id="forget-password" className="modal">
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h5>Forget password</h5>
                                <div className="divider"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <form method="POST">
                                    <InputField required="yes" type="email" placeholder="Enter your email" 
                                    classes="col s12" id="forget-input-email"/>
                                    <div className="input-field col s12">
                                        <button type="submit" className="btn btn-large btn-primary">recover account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close btn-flat">
                        Close
                    </a>
                </div>
            </div>
        )
    }
}

export default ForgetPasswordModal;
