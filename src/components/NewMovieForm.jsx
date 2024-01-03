import React, { useState } from "react";

function NewMovieForm({ onAddMovie, url }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    release_year: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log (form)
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((newMovie) => {
        // Callback function to handle the newly added movie
        onAddMovie(newMovie);

        // Clear the form after successful submission
        setFormData({
          name: "",
          image: "",
          release_year: "",
          summary: "",
        });
      })
      .catch((error) => {
        console.error("Error adding new movie:", error);
      });
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
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="release_year"
          placeholder="Release year"
          value={formData.release_year}
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
