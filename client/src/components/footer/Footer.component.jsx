import React from "react";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      <h1>
        Made with love by <a href="https://giridharan.netlify.app/" target="_blank" rel="noopener noreferrer"> By RamanGiri</a>
      </h1>
      <div className="socialIcons">
        <a href="https://www.instagram.com/its_me_toby_beagle/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
       
        <a href="https://www.linkedin.com/in/giridharan-raman-63737b69/" target="_blank"rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/ramangiri" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
