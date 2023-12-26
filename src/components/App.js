import '../App.css';
import MoviePage from './MoviePage.jsx'
import MovieList from './MovieList.jsx'
import { Routes, Route } from'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
