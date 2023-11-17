import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'


const MovieHero= () => {
    const {movie} = useContext(MovieContext)

    const genres = movie.genres?.map(({name}) => name)
  return (
    <div>MovieHeroComponent</div>
  )
}

export default MovieHero