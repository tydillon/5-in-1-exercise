import React from 'react'
import { merge } from 'ramda'

const MovieDropdown = ({ setNewMovie, newMovie }) => {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Rating:</label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
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
                <div
                  className="dropdown-content"
                  onClick={e =>
                    setNewMovie(merge(newMovie, { rated: e.target.innerText }))
                  }
                >
                  <a href="#" className="dropdown-item">
                    G
                  </a>
                  <a href="#" className="dropdown-item">
                    PG
                  </a>
                  <a href="#" className="dropdown-item">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDropdown
