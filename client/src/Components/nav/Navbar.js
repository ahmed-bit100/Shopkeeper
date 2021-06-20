import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <div className="nav">
      <span>
        <Link className="link" id="logo">
          Shopkeeper
        </Link>
      </span>
      <div className="links">
        <Link className="link">Clothing</Link>
        <Link className="link">Footwear</Link>
        <Link className="link">Accessories</Link>
        <Link className="link">Sign in</Link>
      </div>
    </div>
  );
};

export default Navbar;
