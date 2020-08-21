import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  return (
    <div id='menu'>
      <Link to='hint'><div>?</div></Link>
      <Link to='/map'><div>Map</div></Link>
      <div>Next</div>
    </div>
  )
}

export default Menu
