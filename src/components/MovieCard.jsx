import react, {useState} from "react"

function MovieCard({ movie, deleteMovie, onUpdateRelease, url }) {

  const handleClick = () =>{
    deleteMovie(movie)
  }

  const initialForm = {release_year: 0}
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState(initialForm)

  function handleClickEditing ()
  {
    setEditing(!editing)
  }

  function handleChange(e)
  {
    setFormData({release_year: parseInt(e.target.value)})
  }

  function handleSubmit (e)
  {
    e.preventDefault()

    fetch(`${url}/${movie.id}`,
    {
      method: "PATCH",
      headers: 
      {
        "content-type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(editedMovie => onUpdateRelease(editedMovie))

    setEditing(!editing)
  }



  return (
    <li className="card">
      <img src={movie.image} alt={movie.name} />
      <div className="card-content">
        <h4 className="card-title">{movie.name}</h4>
        
        {editing ?
        (<form onSubmit={handleSubmit}>
          <input type="text" name="release_year" placeholder="Release year" onChange={handleChange}/>
          <button type="submit">Confirm</button>
        </form>) : 
        (<p className="card-release">{movie.release_year}
          <button type="click" onClick={handleClickEditing}>Edit</button>
        </p>)}
        
        <p className="card-summary">{movie.summary}</p>
        <button onClick={()=>handleClick(movie)}className="primary">Delete</button>
      </div>
    </li>
  );
}

export default MovieCard;
