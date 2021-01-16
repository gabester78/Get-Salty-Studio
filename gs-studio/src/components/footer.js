import React from "react";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import email from "../images/email.svg"

const Footer = () => {
  return (
        <footer>
          <div className="foot_container">
            <p>©2021 Get Salty Studio</p>
            <div>
              <a href="https://www.facebook.com/getsaltyskincarestudio/" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook Logo" /></a>
              <a href="https://www.instagram.com/getsaltyskincarestudio/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram Logo" /></a>
              <a href="mailto:contact@getsaltystudio.com" target="_blank" rel="noreferrer"><img src={email} alt="Instagram Logo" /></a>
            </div>
          </div>
        </footer>
  );
};

export default Footer;