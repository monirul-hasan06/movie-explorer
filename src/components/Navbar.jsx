import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>MovieExplorer</h1>
      </div>
      <div className="nav-links">
        <Link to="/movies" className="explore-button">
          Explore Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;