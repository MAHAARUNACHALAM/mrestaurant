import React, { Fragment } from 'react';
import './Header.css';
import mbbq from '../../../assets/images/mbbq.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Place your logo here */}
        <img src={mbbq} className="logo-image" alt="Logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="/">HOME</a></li>
          <li><a href="/menu">MENU</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/events">EVENTS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
