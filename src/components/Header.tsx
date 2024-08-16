import React from 'react';
import Logo from '../assets/smart lights_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Smart Lights Logo" />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Software Services</a>
              </li>
            </ul>
            <button className="login-button ms-lg-3">Login</button>
          </div>
         
        </nav>
      </header>
    </div>
  );
};

export default Header;
