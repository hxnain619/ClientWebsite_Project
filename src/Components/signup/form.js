import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import InputField from '../global/partials/inputField';
import LoginComponent from '../../screen/Login/LoginComponent';

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.signUp = this.signUp.bind(this);
      }
    
      signUp(event) {
        event.preventDefault();
        var Username = document.getElementsByTagName('input')[0].value;
        var Email = document.getElementsByTagName('input')[1].value;
        var Password = document.getElementsByTagName('input')[2].value;
        fetch('http://localhost:4000/signup', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "username": Username,
            "email": Email,
            "password": Password,
            "isAdmin": false
          })
        }).then((response) => {
          if (response.status === 200) {
            
          alert('successfully sign up!!');
          this.props.history.push('/login');
          } else {
            alert('cant sign up, user exists!!');
            this.handleClick();
          }
        }).catch(err => alert("sign up server error!!",err));
      }
      
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
                            <form method="POST" onSubmit={this.signUp}>
                                <InputField type="text" placeholder="Enter your name" id="input-name" required="yes" classes="col s12" />
                                <InputField type="email" placeholder="Enter your email address" id="input-email" required="yes" classes="col s12" />
                                <InputField type="password" placeholder="Password" id="input-password" required="yes" classes="col s12" />
                                <div className="input-field col s12">
                                    <button type="submit" className="btn btn-large btn-primary" >
                                    register
                                    </button>
                                    <button type="button" 
                                    className="btn btn-large btn-secondary" 
                                    style={{marginLeft: "5%"}}
                                    onClick={this.handleClick}
                                    >
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
    handleClick() {
        let elems = document.getElementsByTagName('input');
        Array.prototype.forEach.call(elems, (elem) => {
            elem.value = null;
        });
    }
}

export default Form;