import React from 'react';
import '../styles/Footer.css'

function Footer() {

  return (
    <footer className="footer">
      <a href="https://github.com/Saidou25">
        <img src='images/logo.png' alt="minicat"></img>
      </a>
      <a href="https://github.com/Saidou25">
       {/* I do not have a twete account yet and my stack Overflow hasn' t been active 
       so i have linded all logos to my github instead. */}
        <img src='images/twitterlogos.png' alt="minibird"></img>
      </a>
      <a href="https://github.com/Saidou25">
       {/* I do not have a twete account yet and my stack Overflow hasn' t been active 
       so i have linded all logos to my github instead. */}
        <img src='images/linkedIn.png' className='linkedIn' alt="letters l n"></img>
      </a>
    </footer>

  );
};

export default Footer;