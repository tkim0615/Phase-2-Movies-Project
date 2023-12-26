function NewMovieForm() {
    return (
      <div className="new-movie-form">
        <h2>New Movie</h2>
        <form>
          <input type="text" name="name" placeholder="Movie name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="text" name="release_year" placeholder="Release year" />
          <input type="text" name="summary" placeholder="Summary" />

          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
  
  export default NewMovieForm;
  