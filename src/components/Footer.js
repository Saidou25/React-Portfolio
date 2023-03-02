import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/github-mark-1.png';
// import twitter from '../assets/images/twitterlogo.png';
import linkedIn from '../assets/images/linkedIn.png';

function Footer() {

  return (
    <footer className="footer">
      <a href="https://github.com/Saidou25">
        <img src={logo} className='github' alt="minicat"></img>
      </a>
      {/* <a href="https://github.com/Saidou25">
        <img src={twitter} alt="minibird"></img>
      </a> */}
      <a href="https://www.linkedin.com/feed/">
        <img src={linkedIn} className='linkedIn' alt="letters l n"></img>
      </a>
    </footer>

  );
};

export default Footer;