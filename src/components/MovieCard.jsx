
function MovieCard({movie}) {

  
  return (
    <li className="card">
      <img src={movie.image}
       alt={movie.name}
        />

      <h4>{movie.name}</h4>
      <p>{movie.release_year}</p>
      <p>{movie.summary}</p>
      <button className="primary">Delete</button>

    </li>
  );
}

export default MovieCard;
