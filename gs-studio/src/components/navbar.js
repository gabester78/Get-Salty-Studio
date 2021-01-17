import React from "react";
import GSSLogo from "../images/GSS-Logo.svg"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <img src={GSSLogo} alt="Get Salty Studio Logo"/>
        <div className="navbar">
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="/about">
                <p>About</p>
            </NavLink>
            <NavLink to="/services">
                <p>Services</p>
            </NavLink>
            <NavLink to="/contact">
                <p>Contact</p>
            </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;