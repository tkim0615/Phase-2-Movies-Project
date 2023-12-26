import '../App.css';
import MoviePage from './MoviePage.jsx'
import MovieList from './MovieList.jsx'
import { Routes, Route } from'react-router-dom';
import NewMovieForm from './NewMovieForm.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/new-movie-form" element={<NewMovieForm />} />
        
      </Routes>
    </div>
  );
}

export default App;
