import React from 'react';

function MovieCard({ movie, onOpenModal }) {
  // TVMaze API handles missing data sometimes, so it's good practice to add fallback values
  const title = movie.name || "Unknown Title";
  const rating = movie.rating?.average || "N/A";
  const year = movie.premiered ? movie.premiered.substring(0, 4) : "Unknown";
  const image = movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";

  return (
    <div className="movie-card">
      <img src={image} alt={`${title} poster`} className="movie-poster" />
      
      <div className="movie-info">
        <h3>{title}</h3>
        <p>⭐ {rating} • 📅 {year}</p>
        
        <button onClick={() => onOpenModal(movie)} className="details-button">
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;