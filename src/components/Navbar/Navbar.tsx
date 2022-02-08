import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand-container">
          <h1 className="navbar-title">SFPOPOS</h1>
          <p className="navbar-subtitle">San Francisco Privately Owned Public Spaces</p>
        </div>
      </div>
      <div className="navbar-right">
        <NavLink className={({ isActive }) => ( isActive ? "navbar-link navbar-link-active" : "navbar-link")} to='/'>List</NavLink>
        <NavLink className={({ isActive }) => ( isActive ? "navbar-link navbar-link-active" : "navbar-link")} to='/about'>About</NavLink>
        <NavLink className="navbar-button" to='/random'>Show me a random space</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
