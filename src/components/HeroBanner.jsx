import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.png';

function HeroBanner() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigates the user to the Movie Listing page when clicked
    navigate('/movies');
  };

  return (
    <section className="hero-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(16, 27, 34, .98), rgba(16, 27, 34, .55)), url(${heroImage})` }}>
      <div className="hero-content">
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