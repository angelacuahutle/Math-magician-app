import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <span className="title-math">Math Magicians</span>
      <div className="menu-items">
        <Link to="/math-magician-app/Calculator">Calculator</Link>
        <Link to="/math-magicians/" className="linkCalculator text-decoration-none">Home</Link>
        <Link to="/math-magicians/Calculator" className="linkCalculator text-decoration-none">Calculator</Link>
      </div>
    </nav>
  );
}

export default Navbar;
