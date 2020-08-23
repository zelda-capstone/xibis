import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
      <div className='story'>
        <div className='typewriter'>
          Here, our initial story will begin...
        </div>
        <div className='typewriter'>
          Are you ready to get started?
        </div>
        <div className='buttons-container'>
          <button><Link to='/bubos' className='button'>Yes</Link></button>
          <button><Link to='/play' className='button'>No</Link></button>
        </div>
      </div>
    </>
  )
}

//would be fun to add some typwriter animation so the text doesn't all come in at once

export default Intro
