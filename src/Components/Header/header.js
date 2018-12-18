import React from 'react';
import {NavLink} from 'react-router-dom';

    //Components
import NavBar from '../NavBar/navbar';


class Home extends React.Component {
    render() {
        return (
            <div>
                <img className='up-girl' src={require('../../assets/images/n1.png')} alt='' />
                <div className='container'>
                    <img className='logo' src={require('../../assets/images/logo.png')} alt='' />
                    <NavBar />
                </div>
            </div>
        )
    }  
}

export default Home;