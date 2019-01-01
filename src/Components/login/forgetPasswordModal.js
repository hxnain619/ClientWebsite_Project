import React from 'react';
import InputField from '../global/partials/inputField';
import { withRouter } from "react-router-dom";

class ForgetPasswordModal extends React.Component {
    constructor() {
        super();
        this.forgot = this.forgot.bind(this);
    }
    forgot(event) {
        event.preventDefault();
        var Email = document.getElementsByTagName('input')[0].value;
        fetch('http://localhost:4000/forgot', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": Email
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    alert('successfully send!!');
                    this.props.history.push('/login');
                } else {
                    alert('User Not Found!!');
                    this.handleClick();
                    
                }
            })
            .catch(err => alert(" server error!!", err));

    };
    render() {
        return (
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
                                <form method="GET">
                                    <InputField required="yes" type="email" placeholder="Enter your email"
                                        classes="col s12" id="forget-input-email" />
                                    <div className="input-field col s12">
                                        <button className="btn btn-large btn-primary" onClick={this.forgot} >recover account</button>
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
    handleClick() {
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems, (elem) => {
            elem.value = null;
        });
    }
}

export default withRouter(ForgetPasswordModal);
