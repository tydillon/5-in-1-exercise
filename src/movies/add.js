import React, { useState } from 'react'
import { Link } from '@reach/router'
import { merge } from 'ramda'

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    rated: '',
    year: '',
    genre: '',
    director: ''
  })

  const handleRatingDropdown = e =>
    setNewMovie(merge(newMovie, { rated: e.target.innerText }))

  return (
    <div>
      <h1>This is the page to add a movie</h1>
      {JSON.stringify(newMovie)}
      <form>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Title:</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="title"
                  placeholder="Movie Title"
                  onChange={e =>
                    setNewMovie(merge(newMovie, { title: e.target.value }))
                  }
                />
              </p>
            </div>
          </div>
        </div>

        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Rating</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content" onClick={handleRatingDropdown}>
              <a href="#" className="dropdown-item">
                G
              </a>
              <a className="dropdown-item">PG</a>
              <a href="#" className="dropdown-item is-active">
                PG-13
              </a>
              <a href="#" className="dropdown-item">
                R
              </a>
              <a href="#" className="dropdown-item">
                NC-17
              </a>
              <a href="#" className="dropdown-item">
                Other
              </a>
            </div>
          </div>
        </div>
      </form>
      <Link to="/movies">Go back</Link>
    </div>
  )
}

export default AddMovie
