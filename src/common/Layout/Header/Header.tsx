import React from 'react';
import { Link } from 'gatsby';
// import logo from '../../../images/logo.svg';
// // import logo from '../../../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <header>
      {/* <img src={logo} /> */}

      <nav>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
