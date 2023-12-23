import React, {useState, useEffect} from "react";
const url = 'http://localhost:4001/movies'
function MoviePage() {
    const  [movies, setMovies] = useState([])

    useEffect(() => {
      fetch(url)
      .then(r=>r.json()).then(setMovies)
}   ,[])

    console.log(movies)

    return (
    <main>
        moviePage
    </main>
  );
}

export default MoviePage