import React from 'react'
import { Link } from 'react-router-dom'
import {Twinkle} from '../components'

//currently linking straight to map, but in future will be linking
//to initial narration text, then bubos selector

const StartGame = (props) => {

  return (
    <>
      <Twinkle />
      <div id='start-container'>
        <Link to='/intro'>
          <div>start new journey</div>
        </Link>
        <div>load game</div>
      </div>
    </>
  )
}

export default StartGame;
