import react from "react"
import MovieList from "./MovieList"

function ComingSoon({ movies, deleteMovie })
{

    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    const comingSoonMovies = movies.filter(movie => 
        {
            return movie.release_year >= currentYear
        })

    return (
        <MovieList movies={comingSoonMovies} deleteMovie={deleteMovie} />
    )
}

export default ComingSoon