import React, { useState } from "react";

function NewMovieForm({ onAddMovie, url }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    release_year: 0,
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const movieTitle = e.target.name.value
    let moviePoster = ""
    let moviePosterURL = ""
    let movieReleaseYear = 0
    const movieSummary = e.target.summary.value

    const apiKey = process.env.REACT_APP_API_KEY

    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(movieInfo => 
      {
        moviePoster = movieInfo.results[0].poster_path
        moviePosterURL = `https://image.tmdb.org/t/p/original${moviePoster}`
        movieReleaseYear = parseInt(movieInfo.results[0].release_date.slice(0,4))

        const updatedForm = 
        {
          name: movieTitle,
          image: moviePosterURL,
          release_year: movieReleaseYear,
          summary: movieSummary
        }

        setFormData(updatedForm)

        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedForm),
        })
          .then((resp) => resp.json())
          .then((newMovie) => {
            onAddMovie(newMovie);

            setFormData({
              name: "",
              image: "",
              release_year: 0,
              summary: "",
            });
          })
          .catch((error) => {
            console.error("Error adding new movie:", error);
          });
        })
  };

  return (
    <div className="new-movie-form">
      <h2>New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Movie name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default NewMovieForm;
