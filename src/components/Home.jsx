import {useEffect, useState } from "react"
import MovieCard from "./MovieCard"

function Home({url, homeMovies, deleteHomeMovie})
{
    // const [homeMovies, setHomeMovies] = useState([])

    // // useEffect(() => 
    // // {
    // //     fetch(`${url}?_limit=5`)
    // //     .then(resp => resp.json())
    // //     .then(homeMovies => 
    // //         {
    // //             setHomeMovies(movies.slice(0, 5))
    // //         })
    // // }, [])
    // useEffect(() =>{
    //     setHomeMovies(movies.slice(0, 5))
    // }, [movies]);

    // const deleteMovie = (deletedMovie) =>{
    //     const moviesArrayWithOutDeletedMovie = homeMovies.filter(movie =>{
    //         if(movie.id !== deletedMovie.id){
    //             return true
    //         }
    //     })
    //     setHomeMovies(moviesArrayWithOutDeletedMovie)
        
    // }

    return (
        <div>
            <h2>Check These Movies Out!  You Can Also Look At All Movies By Clicking "All Movies" Above!</h2>
            <ul className="cards">{homeMovies.map(movie => <MovieCard deleteMovie={deleteHomeMovie}  key={movie.id} movie={movie} />)}</ul>

        </div>
    )
}

export default Home