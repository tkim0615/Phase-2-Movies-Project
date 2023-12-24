import React, {useState, useEffect} from "react";
import MovieList from "./MovieList"
const url = 'http://localhost:4001/movies'
function MoviePage() {
  const  [movies, setMovies] = useState([])

    useEffect(() => {
      fetch(url)
      .then(r=>r.json()).then(setMovies)
}   ,[])


    return (
    <main>
        <MovieList movies={movies} />
    </main>
  );
}

export default MoviePage