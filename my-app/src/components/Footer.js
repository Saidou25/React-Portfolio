import React from 'react';
import '../styles.css/Footer.css'

function Footer() {

  return (
    <footer className="footer">
      <a href="https://github.com/Saidou25">
        <img src='images/logo.png' alt="minicat"></img>
      </a>
      <a href="https://github.com/Saidou25/seo-refactor">
       {/* I do not have a twete account yet and my stack Overflow hasn' t been active 
       so i have linded all logos to my github instead. */}
        <img src='images/twitterlogos.png' alt="minibird"></img>
      </a>
      <a href="https://www.linkedin.com/feed/">
        <img className='responsivelogo' src='images/linkedin.png' alt="letters i and n"></img>
      </a>
    </footer>

  );
};

export default Footer;