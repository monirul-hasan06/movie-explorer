import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        {/* TODO: Add your application logo or brand name here */}
        <h1>MovieExplorer</h1>
      </div>
      <div className="nav-links">
        {/* TODO: Add navigation links. Use the <Link> component to navigate to "/movies" */}
        <Link to="/movies" className="explore-button">
          Explore Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;