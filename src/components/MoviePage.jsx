import React, {useState, useEffect} from "react"
import MovieList from "./MovieList"
import NewMovieForm from "./NewMovieForm"
import { Routes, Route } from "react-router-dom"
import ComingSoon from "./ComingSoon"
import Home from "./Home"
import Search from "./Search"
import MovieDetail from "./MovieDetail"
const url = 'http://localhost:4001/movies'


function MoviePage() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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
    })}

const onHandleSearchChange =(e) =>{
  setSearchTerm(e.target.value)
}

const filteredBySearch = movies.filter(movie =>{
  if(movie.name.toLowerCase().includes(searchTerm.toLowerCase())){
    return true
}})

function onUpdateRelease(updatedMovie)
{
  const updatedMovies = movies.map(originalMovie => 
    {
      if (originalMovie.id === updatedMovie.id)
      {
        return updatedMovie
      }

      else{
        return originalMovie
      }
    })

    setMovies(updatedMovies)
}

function onAddMovie (newMovie){
  setMovies([...movies, newMovie])
}

    return (
    <main>
      <Search searchTerm={searchTerm} onHandleSearchChange={onHandleSearchChange}/>
        <Routes>
          <Route
            path="/"
            element={<Home homeMovies={filteredBySearch.slice(0,5)} deleteMovie={deleteMovie} onUpdateRelease={onUpdateRelease} url={url} />}
          />
          <Route
            path="/new-movie-form"
            element={<NewMovieForm url={url} onAddMovie={onAddMovie}/>}
          />
          <Route
            path="/movies"
            element={<MovieList deleteMovie={deleteMovie} movies={filteredBySearch} onUpdateRelease={onUpdateRelease} url={url} />}
          />
            <Route
              path="/movies/coming-soon"
              element={<ComingSoon deleteMovie={deleteMovie} movies={filteredBySearch} onUpdateRelease={onUpdateRelease} url={url} />}
            />
            <Route
              path="/movies/:id"
              element={<MovieDetail />}
            />
            
            

        </Routes>
    </main>
  );
}

export default MoviePage