import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <Link to="/" className="title-math text-black text-decoration-none">Math Magicians</Link>
      <div className="menu-items">
        <Link to="/" className="links text-decoration-none">Home</Link>
        <Link to="/Calculator" className="links text-decoration-none">Calculator</Link>
        <Link to="/Quote" className="links text-decoration-none">Quote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
