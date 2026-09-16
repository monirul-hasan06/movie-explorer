import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroBanner() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigates the user to the Movie Listing page when clicked
    navigate('/movies');
  };

  return (
    <section className="hero-banner">
      {/* TODO: Style this section with a movie-related background image or gradient */}
      
      <div className="hero-content">
        {/* TODO: Add application title/heading and a short engaging description */}
        <h2>Discover Movies</h2>
        <p>Explore and discover your favorite movies from around the world.</p>
        
        {/* CTA Button */}
        <button onClick={handleExploreClick}>
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;