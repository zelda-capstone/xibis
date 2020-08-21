import React from 'react'
import { Link } from 'react-router-dom'

const StartGame = (props) => {
  return (
    <>
      <div id='start-container'>
        <Link to='/test-puzzle'>
          <div>start your journey...</div>
        </Link>
      </div>
    </>
  )
}

export default StartGame;
