
import MovieCard from "./MovieCard";

function MovieList({movies}) {
    console.log(movies)
  return (
    <ul className="cards">{movies.map(movie=> <MovieCard key={movie.id} movie={movie} />)}</ul>
  );
}

export default MovieList;
