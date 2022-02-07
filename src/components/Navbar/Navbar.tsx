import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="navbar-link" to='/list'>List</Link>
        <Link className="navbar-link" to='/about'>About</Link>
        <Link className="navbar-button" to='/random'>Show me a random space</Link>
      </div>
    </div>
  );
}

export default Navbar;
