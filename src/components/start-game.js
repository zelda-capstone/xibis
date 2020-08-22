import React from 'react'
import { Link } from 'react-router-dom'

//currently linking straight to map, but in future will be linking to bubos selector

const StartGame = (props) => {
  return (
    <>
      <div id='start-container'>
        <Link to='/map'>
          <div>start new journey</div>
        </Link>
        <div>load game</div>
      </div>
    </>
  )
}

export default StartGame;
