import React from 'react';
import '../styles.css/Navigation.css'

function Navigation({currentPage, handlePageChange}) {

  return (

    <div className='row header'>
      <div className='col-4 myname'><h1>Saidou Monta</h1>
      </div>
      <div className='col-8'>

        <ul className="nav">
          <li className="nav-item">
            <a
              href="#About"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio</a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact</a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              Resume</a>
          </li>
        </ul>
      </div>
    </div>

  );

};

export default Navigation;


