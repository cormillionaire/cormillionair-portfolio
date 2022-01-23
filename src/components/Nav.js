import React from 'react';
import '../styles/Nav.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" role="navigation">
        <div class="container-fluid">
          <a class="navbar-brand" href="#home" onClick={() => handlePageChange('Home')}>
            <img src="/cormillionaireLogoShort.png" alt="cormillionaire" width="30" height="30" class="align-text-top"></img>
            cormillionaire
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  about
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </div>
  );
}

export default Nav;