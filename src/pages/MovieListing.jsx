import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

function MovieListing() {
  // --- State Management ---
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal state
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- API Integration ---
  
  // Fetch initial shows on component mount
  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        setMovies(data); 
      } catch (error) {
        console.error("Failed to fetch initial movies:", error);
      }
    };

    fetchInitialMovies();
  }, []);

  // Fetch search results
  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery) return; 

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
      const data = await response.json();
      
      // Normalize data by extracting the nested 'show' object
      const normalizedData = data.map(item => item.show);
      
      setMovies(normalizedData);
    } catch (error) {
      console.error("Failed to search movies:", error);
    }
  };

  // --- Modal Handlers ---
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="movie-listing-container">
      {/* Search Bar Section */}
      <form onSubmit={handleSearch} className="search-section">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Movie Grid Section */}
      <div className="movie-grid">
        {/* TODO: Write the logic to map over the 'movies' array here. */}
        {/* For each movie, render a <MovieCard /> and pass 'movie' and 'openModal' as props. */}
      </div>

      {/* Details Modal */}
      {isModalOpen && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}

export default MovieListing;