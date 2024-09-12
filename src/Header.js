import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="image/logo.png"
            alt="Logo"
            style={{ width: '100px', height: '100px', marginRight: '100px' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
  );
};

export default Header;
