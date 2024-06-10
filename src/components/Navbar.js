import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/order">Order</Link>
    </nav>
  );
}

export default Navbar;
