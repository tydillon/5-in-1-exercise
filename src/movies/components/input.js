import React from 'react'
import { merge } from 'ramda'

const MovieInput = ({ setState, state, type }) => {
  const typeCap = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{typeCap}:</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type={type}
              placeholder={`Movie ${typeCap}`}
              onChange={e => setState(merge(state, { [type]: e.target.value }))}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieInput
