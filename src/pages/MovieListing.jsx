import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

function MovieListing() {
  // --- State Management ---
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Modal state
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- API Integration ---
  
  // Fetch initial shows on component mount
  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        if (!response.ok) throw new Error('Unable to load shows.');
        const data = await response.json();
        setMovies(data); 
      } catch (error) {
        console.error("Failed to fetch initial movies:", error);
        setError('We could not load the shows right now. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialMovies();
  }, []);

  // Fetch search results
  const handleSearch = async (e) => {
    e.preventDefault();
    
    const query = searchQuery.trim();
    if (!query) return;

    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Search failed.');
      const data = await response.json();
      
      // Normalize data by extracting the nested 'show' object
      const normalizedData = data.map(item => item.show);
      
      setMovies(normalizedData);
    } catch (error) {
      console.error("Failed to search movies:", error);
      setError('Search is unavailable right now. Please try again.');
    } finally {
      setIsLoading(false);
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
      <header className="listing-header">
        <Link to="/" className="brand">MovieExplorer</Link>
        <p>Find your next favorite show.</p>
      </header>
      {/* Search Bar Section */}
      <form onSubmit={handleSearch} className="search-section">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>Search</button>
      </form>

      {/* Movie Grid Section */}
      <div className="movie-grid">
        {isLoading && <p className="status-message">Loading shows...</p>}
        {!isLoading && error && <p className="status-message error-message">{error}</p>}
        {!isLoading && !error && movies.length === 0 && (
          <p className="status-message">No shows matched your search.</p>
        )}
        {!isLoading && !error && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onOpenModal={openModal} />
        ))}
      </div>

      {/* Details Modal */}
      {isModalOpen && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}

export default MovieListing;