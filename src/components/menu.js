import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

  return (
    <div id='menu' >
      <div id='map-ufo'>
        <Link to='/map'>
          <div className='ufo'></div>
        </Link>
        <div className='ufo-shadow'></div>
      </div>
    </div>
  )
}

export default Menu
