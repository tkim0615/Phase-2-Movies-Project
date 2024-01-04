import MovieList from "./MovieList"

function ComingSoon({ movies, deleteMovie, onUpdateRelease, url })
{

    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    const comingSoonMovies = movies.filter(movie => 
        {
            return movie.release_year >= currentYear
        })

    return (
        <MovieList movies={comingSoonMovies} deleteMovie={deleteMovie} onUpdateRelease={onUpdateRelease} url={url} />
    )
}

export default ComingSoon