import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/logo.png';
import twitter from '../assets/images/twitterlogo.png';
import linkedIn from '../assets/images/linkedIn.png';

function Footer() {

  return (
    <footer className="footer">
      <a href="https://github.com/Saidou25">
        <img src={logo} alt="minicat"></img>
      </a>
      <a href="https://github.com/Saidou25">
        {/* I do not have a twete account yet and my stack Overflow hasn' t been active 
       so i have linded all logos to my github instead. */}
        <img src={twitter} alt="minibird"></img>
      </a>
      <a href="https://www.linkedin.com/feed/">
        <img src={linkedIn} className='linkedIn' alt="letters l n"></img>
      </a>
    </footer>

  );
};

export default Footer;