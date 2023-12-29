import '../App.css';
import MoviePage from './MoviePage.jsx'
// import MovieList from './MovieList.jsx'
import { Routes, Route } from'react-router-dom';
// import NewMovieForm from './NewMovieForm.jsx';
import Header from "./Header.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <MoviePage />
      {/* <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/new-movie-form" element={<NewMovieForm />} />
      </Routes> */}
    </div>
  );
}

export default App;
