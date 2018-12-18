import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
     <div className='about-footer' >
        <h1>about</h1>
      </div>
      <center>
        <img src={require('../../assets/images/logo.png')} alt='' />
        <p>© 2018 Upupmanga.com. All Rights Reserved</p>
      </center>
    </div>
  )
}

export default Footer;
