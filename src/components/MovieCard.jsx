function MovieCard({ movie }) {
  return (
    <li className="card">
      <img src={movie.image} alt={movie.name} />
      <div className="card-content">
        <h4 className="card-title">{movie.name}</h4>
        <p className="card-release">{movie.release_year}</p>
        <p className="card-summary">{movie.summary}</p>
        <button className="primary">Delete</button>
      </div>
    </li>
  );
}

export default MovieCard;
