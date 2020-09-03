import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

  return (
    <div id="menu" >
      <Link to='/map'><div>Map</div></Link>
    </div>
  )
}

export default Menu
