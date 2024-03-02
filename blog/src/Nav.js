import React from 'react';
import './Nav.css';

function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
      <li><a href="/Home">Home</a></li>
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/register">REGISTER</a></li>
        <li><a href="/blog">BLOG</a></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
