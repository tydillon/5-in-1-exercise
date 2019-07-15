import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import MovieInput from './components/input'
import MovieDropdown from './components/dropdown'

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    rated: '',
    year: '',
    genre: '',
    director: ''
  })

  const handleSubmit = () => {
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(() => navigate('/movies'))
  }

  return (
    <div>
      <section className="hero is-bold is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Favorite Movies</h1>
          </div>
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <MovieInput setState={setNewMovie} state={newMovie} type={'title'} />
          <MovieDropdown setNewMovie={setNewMovie} newMovie={newMovie} />
          <MovieInput setState={setNewMovie} state={newMovie} type={'year'} />
          <MovieInput setState={setNewMovie} state={newMovie} type={'genre'} />
          <MovieInput
            setState={setNewMovie}
            state={newMovie}
            type={'director'}
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
        <Link to="/movies">Go back</Link>
      </section>
    </div>
  )
}

export default AddMovie
