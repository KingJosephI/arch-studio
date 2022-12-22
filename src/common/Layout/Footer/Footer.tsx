import { Link } from 'gatsby';
import React from 'react';
import logo from '../../../images/logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">See Our Portfolio</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
