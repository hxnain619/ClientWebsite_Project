
import React from 'react';
import InputField from '../global/partials/inputField';

class Form extends React.Component{
    render(){
        return(
            <div className="container-fluid form-page-main-container">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h3>send us a message</h3>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m8 offset-m2 s12">
                            <form method="POST">
                                <InputField className="col s12"  type="text" placeholder="Enter your name" 
                                id="input-name" required="yes"/>
                                <InputField className="col m7 s12" placeholder="Enter your email" type="email"
                                id="input-email" required="yes" />
                                <div className="input-field col m5 s12">
                                    <select>
                                        <option>Manga Request</option>
                                        <option>Suggestion</option>
                                        <option>Other</option>
                                    </select>
                                    <label>query category</label>
                                </div>
                                <div className="input-field col s12">
                                    <textarea id="user-message" className="materialize-textarea" required></textarea>
                                    <label htmlFor="user-message">your message</label>
                                </div>
                                <div className="input-field col s12">
                                    <button type="submit" className="btn btn-large btn-primary">send message</button>
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