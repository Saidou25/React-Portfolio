import React, { useState } from 'react';
import Navigation from './Navigation'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import pageComponents from "./pages";

const pages = Object.keys(pageComponents);

const Header = () => {

    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {

        if (currentPage === 'Resume') {

            return <Resume />
        }
        if (currentPage === 'Contact') {

            return <Contact />
        }
        if (currentPage === 'Portfolio') {

            return <Portfolio />;
        }
        return <About />;

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} pages={pages} />
            {renderPage()}
        </div>
    )
};

export default Header;