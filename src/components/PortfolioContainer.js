import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='body'>
    <div className="content">
      {/* current page state and function */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // calling function */}
      {renderPage()}
      </div>
      <Footer />
      </div>
  );
}
