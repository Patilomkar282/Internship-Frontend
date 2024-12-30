import React from 'react';
import { useState } from 'react';
import '../CSS/navbar.css'; 
import Popupform from "./popupform.js"
import image from '../assets/todolist.png'

const Navbar = () => {
    const [isFormOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="do List Logo" className="logo" /> 
       
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#more">More Option</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-btn">Log In</button>
        <button onClick={handleOpenForm} className="signup-btn">Sign Up</button>
      </div>
      {isFormOpen && <Popupform onClose={handleCloseForm} />}
    </nav>
  );
};

export default Navbar;
