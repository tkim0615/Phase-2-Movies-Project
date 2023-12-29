import {useEffect, useState } from "react"
import MovieCard from "./MovieCard"

function Home({ url })
{
    const [homeMovies, setHomeMovies] = useState([])

    useEffect(() => 
    {
        fetch(`${url}?_limit=5`)
        .then(resp => resp.json())
        .then(homeMovies => 
            {
                setHomeMovies(homeMovies)
            })
    }, [])

    return (
        <div>
            <h2>Check These Movies Out!  You Can Also Look At All Movies By Clicking "All Movies" Above!</h2>
            <ul className="cards">{homeMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}</ul>

        </div>
    )
}

export default Home