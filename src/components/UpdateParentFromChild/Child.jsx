import React from 'react'

function Child({ handleClick }) {
  return (
    <div>
        <h1> Child </h1>
        <button onClick={handleClick}> Change font </button>
    </div>
  )
}

export default Child