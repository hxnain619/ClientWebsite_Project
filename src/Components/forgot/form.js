import React from 'react';
import InputField from '../global/partials/inputField';

class Form extends React.Component{
    render(){
        return(
            <div className="container-fluid form-page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>recover account</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <div className="row">
                                <div className="col s12">
                                    <form method="POST">
                                        
                                        <InputField  classes= "col s12" type="password" placeholder="Enter new password"
                                        id="new-password" required="yes"/>

                                        <InputField classes ="col s12" type="password" placeholder="Confirm new password"
                                        id="new-password-confirm" required="yes"/>

                                        <div className="input-field col s12">
                                            <button type="submit" className="btn btn-large btn-primary">recover</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;