import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const Intro = () => {
  return (
    <>
      <div className='story'>
        <div className='typewriter'>
          Here, our initial story will begin...are you ready to get started?
        </div>
        <div className='buttons-container'>
          <button><Link to={ROUTES.ASSEMBLE_BUBOS} className='button'>Yes</Link></button>
          <button><Link to='/play' className='button'>No</Link></button>
        </div>
      </div>
    </>
  )
}

//would be fun to add some typwriter animation so the text doesn't all come in at once

export default Intro
