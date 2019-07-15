import React from 'react'
import { Router } from '@reach/router'

import Home from './home'
import ShowMovies from './movies/show'
import AddMovies from './movies/add'

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <ShowMovies path="/movies" />
      <AddMovies path="/movies/add" />
    </Router>
  )
}
