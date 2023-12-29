import React, {useState, useEffect} from "react";
import MovieList from "./MovieList"
import NewMovieForm from "./NewMovieForm"
import { Routes, Route } from "react-router-dom"
import ComingSoon from "./ComingSoon"
import Home from "./Home"

const url = 'http://localhost:4001/movies'

function MoviePage() {
  const  [movies, setMovies] = useState([])

    useEffect(() => {
      fetch(url)
      .then(r=>r.json()).then(setMovies)
}   ,[])


    return (
    <main>
        <Routes>
          <Route
            path="/"
            element={<Home url={url} />}
          />
          <Route
            path="/new-movie-form"
            element={<NewMovieForm />}
          />
          <Route
            path="/movies"
            element={<MovieList movies={movies} />}
          />
            <Route
              path="/movies/coming-soon"
              element={<ComingSoon movies={movies} />}
            />
        </Routes>
    </main>
  );
}

export default MoviePage