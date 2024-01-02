import MovieCard from "./MovieCard";

function MovieList({movies, deleteMovie, onUpdateRelease, url}) {

  return (
    <ul className="cards">{movies.map(movie=> <MovieCard deleteMovie={deleteMovie}key={movie.id} movie={movie} onUpdateRelease={onUpdateRelease} url={url} />)}</ul>
  );
}

export default MovieList;