import React from 'react';
import '../styles.css/Footer.css'
import logo from '../images/logo.png';
import twitterlogo from '../images/twitterlogos.png';


function Footer() {

  return (
    <footer className="footer">
      <a href="https://github.com/Saidou25">
        <img src={logo} alt="minicat"></img>
      </a>
      <a href="https://github.com/Saidou25/seo-refactor">
       {/* I do not have a twete account yet and my stack Overflow hasn' t been active 
       so i have linded all logos to my github instead. */}
        <img src={twitterlogo} alt="minibird"></img>
      </a>
    </footer>

  );
};

export default Footer;