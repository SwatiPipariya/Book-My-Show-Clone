import React, { useEffect, useState } from 'react'
import MovieLayoutHoc from '../layout/MovieLayout'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MoviePage = () => {
  const { id } = useParams()

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/now_playing`)
      setCast(getCast.data.results)
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/upcoming`)
      setSimilarMovies(getSimilarMovies.data.results)
    }
    requestSimilarMovies()
  }, [id]);


  return (
    <div>MoviePage</div>
  )
}

export default MovieLayoutHoc(MoviePage)