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


const deleteMovie = (deletedMovie) =>{
  fetch(`${url}/${deletedMovie.id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((deletedMovieResponse) => {
      const moviesArrayWithOutDeletedMovie = movies.filter((movie) => movie.id !== deletedMovie.id)
      setMovies(moviesArrayWithOutDeletedMovie)
    })
}


    return (
    <main>
        <Routes>
          <Route
            path="/"
            element={<Home homeMovies={movies.slice(0,5)} deleteMovie={deleteMovie} />}
          />
          <Route
            path="/new-movie-form"
            element={<NewMovieForm />}
          />
          <Route
            path="/movies"
            element={<MovieList deleteMovie={deleteMovie} movies={movies} />}
          />
            <Route
              path="/movies/coming-soon"
              element={<ComingSoon deleteMovie={deleteMovie} movies={movies} />}
            />
        </Routes>
    </main>
  );
}

export default MoviePage