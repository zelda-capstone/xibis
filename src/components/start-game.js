import React from 'react'
import { Link } from 'react-router-dom'

//currently linking straight to map, but in future will be linking
//to initial narration text, then bubos selector

const StartGame = (props) => {

  return (
    <>
      <div id='start-container'>
        <Link to='/intro'>
          <div>start new journey</div>
        </Link>
        <Link to='/'>
          <div>load game</div>
        </Link>
      </div>
    </>
  )
}

export default StartGame;
