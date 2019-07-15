import React, { useState, useEffect } from 'react'
import { map } from 'ramda'
import { Link } from '@reach/router'

const ShowMovies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(movieList => setMovies(movieList))
  }, [])
  return (
    <div>
      <section className="hero is-bold is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Favorite Movies</h1>
          </div>
        </div>
      </section>
      <ul>
        {map(movie => {
          return <li key={movie.id}>{movie.title}</li>
        }, movies)}
      </ul>
      <Link to="/movies/add">Add a movie</Link>
    </div>
  )
}

export default ShowMovies
