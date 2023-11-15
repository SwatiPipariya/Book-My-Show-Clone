import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import PlayPage from './pages/PlayPage';


// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params={};
// axios.defaults.params["api_key"] = "79f5da683028d4d8f06dfcaf2073231a"
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY


function App() {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/movie/:id" element={<MoviePage /> }/>
     <Route path='/plays' element={<PlayPage />}/>
    </Routes>
  ); 
}

export default App;
