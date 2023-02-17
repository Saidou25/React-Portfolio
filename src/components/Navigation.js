import React from 'react';
import '../styles/Navigation.css'


function Navigation({ currentPage, handlePageChange, pages }) {

  return (

    <div className='row header'>
      <div className='col-4 myname'><h1>Saidou Monta</h1>
      </div>
      <div className='col-8'>
        <div className="navbar">
          <div className="navbar" id='nav'>
            {pages.map((page) => (
              <article key={page} className='nav-item'>
                <a
                  href={`#${page.toLowerCase()}`}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? 'nav-link-active text-dark' : 'nav-link'}
                  id='nav-link'
                >
                  {page}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


