import React, {useState, useEffect} from "react";
import MovieList from "./MovieList"
import NewMovieForm from "./NewMovieForm"
import { Routes, Route } from "react-router-dom"
import ComingSoon from "./ComingSoon"
import Home from "./Home"

const url = 'http://localhost:4001/movies'

function MoviePage() {
  const  [movies, setMovies] = useState([])
  const [homeMovies, setHomeMovies] = useState([])

    useEffect(() => {
      fetch(url)
      .then(r=>r.json()).then(setMovies)
}   ,[])

useEffect(() =>{
  setHomeMovies(movies.slice(0, 5))
}, [movies]);

//delete movies from home page
const deleteHomeMovie = (deletedMovie) =>{
  const moviesArrayWithOutDeletedMovie = movies.filter(movie =>{
      if(movie.id !== deletedMovie.id){
          return true
      }
  })
  setMovies(moviesArrayWithOutDeletedMovie)

}

//delete function for all movies page
const deleteMovie = (deletedMovie) =>{ 
  const moviesArrayWithOutDeletedMovie = movies.filter( movie =>{
    if(movie.id !== deletedMovie.id){
      return true
    }
  })
  setMovies(moviesArrayWithOutDeletedMovie)
}



    return (
    <main>
        <Routes>
          <Route
            path="/"
            element={<Home homeMovies={homeMovies} deleteHomeMovie={deleteHomeMovie} />}
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