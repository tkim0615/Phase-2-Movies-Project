import MovieCard from "./MovieCard";

function MovieList({movies, deleteMovie}) {

  return (
    <ul className="cards">{movies.map(movie=> <MovieCard deleteMovie={deleteMovie}key={movie.id} movie={movie} />)}</ul>
  );
}

export default MovieList;
