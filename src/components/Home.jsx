import {useEffect, useState } from "react"
import MovieCard from "./MovieCard"

function Home({url, homeMovies, deleteMovie, onUpdateRelease})
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


    return (
        <div>
            <h2>Check These Movies Out!  You Can Also Look At All Movies By Clicking "All Movies" Above!</h2>
            <ul className="cards">{homeMovies.map(movie => <MovieCard deleteMovie={deleteMovie}  key={movie.id} movie={movie} onUpdateRelease={onUpdateRelease} url={url} />)}</ul>

        </div>
    )
}

export default Home