import React from 'react'
import { Link } from 'react-router-dom'

const StartGame = (props) => {
  return (
    <>
      <div id='start-container'>
        <Link to='/map'>
          <div>start your journey...</div>
        </Link>
      </div>
    </>
  )
}

export default StartGame;
