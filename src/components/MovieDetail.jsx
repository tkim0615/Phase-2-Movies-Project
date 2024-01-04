import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"

function MovieDetail (){
    const [movie, setMovie] = useState({})
    const {id} = useParams()
    
    useEffect( () =>{
        fetch(`http://localhost:4001/movies/${id}`)
            .then(r=> r.json())
            .then(data=>(setMovie(data)))

    },[id])

    return(
        <div className="movie-detail-container">
        <h1>Movie Detail</h1>
        <li className="card">
          <img src={movie.image} alt={movie.name} />
  
          <div className="card-content">
            <h4 className="card-title">{movie.name}</h4>
            <p className="card-release">{movie.release_year}</p>
            <p className="card-summary">{movie.summary}</p>
          </div>
        </li>
      </div>
    )
}
export default MovieDetail