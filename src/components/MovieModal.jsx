import React from 'react';

function MovieModal({ movie, onClose }) {
  // If no movie is selected, do not render the modal
  if (!movie) return null;

  // Extracting data safely just like in the MovieCard
  const title = movie.name || "Unknown Title";
  const rating = movie.rating?.average || "N/A";
  const year = movie.premiered ? movie.premiered.substring(0, 4) : "Unknown";
  
  // Try to grab the larger 'original' image for the modal backdrop
  const image = movie.image?.original || movie.image?.medium || "https://via.placeholder.com/600x400?text=No+Image";
  
  // Note: The TVMaze API returns the 'summary' text with HTML tags included (e.g., <p>...</p>).
  // You will need to figure out how to render this HTML string safely in React!
  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, '').trim()
    : "No overview available.";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-button" onClick={onClose} aria-label="Close details">
          Close
        </button>
        
        {/* Backdrop Image */}
        <img src={image} alt={`${title} backdrop`} className="modal-backdrop" />
        
        {/* Details Section */}
        <div className="modal-details">
          <h2>{title}</h2>
          <p>⭐ Rating: {rating} | 📅 Release: {year}</p>
          
          <div className="modal-overview">
            <h3>Overview:</h3>
            <div>{summary}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;