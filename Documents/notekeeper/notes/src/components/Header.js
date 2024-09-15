// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png'; // Update the path to your logo file
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">NoteNest</h1>
      </div>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
        <span className="slider"></span>
      </label>
    </header>
  );
};

export default Header;
