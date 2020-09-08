import React from 'react'
import {Link} from 'react-router-dom'

const GameWin = () => {
  return (
    <div id="win-screen">
      <div id="win-title">
        <h1>the journey is complete</h1>
        <p>
          the Xibis thank you for your help in guiding them along their voyage.
        </p>
      </div>
      <div id="logo-image"></div>
      <div className="container">
        <Link to="/">
          <span>play again?</span>
        </Link>
      </div>
    </div>
  )
}

export default GameWin
