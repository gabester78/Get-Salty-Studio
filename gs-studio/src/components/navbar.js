import React from "react";
import GSSLogo from "../images/GSS-Logo.svg"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <img src={GSSLogo} alt="Get Salty Studio Logo"/>
        <div className="navbar">
            <NavLink to="/">
                <h4>Home</h4>
            </NavLink>
            <NavLink to="/about">
                <h4>About</h4>
            </NavLink>
            <NavLink to="/services">
                <h4>Services</h4>
            </NavLink>
            <NavLink to="/contact">
                <h4>Contact</h4>
            </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;