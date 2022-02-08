import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <NavLink className={({ isActive }) => ( isActive ? "nav-link nav-link-active" : "nav-link")} to='/'>List</NavLink>
        <NavLink className={({ isActive }) => ( isActive ? "nav-link nav-link-active" : "nav-link")} to='/about'>About</NavLink>
      </div>
    </footer>
  );
}

export default Footer;
