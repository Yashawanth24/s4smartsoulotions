import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center " href="#">
            <img
              src="https://cdn.prod.website-files.com/6604adbd42b73cba937072b0/669117fd7e590071c77616f7_s4m-logo-main.png"
              alt="Logo"
              style={{ marginRight: '110px' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a href="#" className="btn get-started-btn">Get Started →</a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
