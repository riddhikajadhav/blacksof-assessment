import React from 'react';
import Logo from '../assets/smart lights_logo.svg'
const Footer: React.FC = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="row footer-container">
      <div className="col-lg-6 col-md-12 footer-logo">
        <img src={Logo} alt="Smart Lights Logo" />
      </div>
      <div className="col-lg-6 col-md-12 footer-links">
        <a href="#">Product</a>
        <a href="#">Software Services</a>
        <a href="#">Follow Us</a>
      </div>
    </div>
    <div className="footer-bottom">
      <hr />
      <div className="footer-policies">
        <a href="#">Privacy Policy</a>
        <a href="#">|</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">|</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
