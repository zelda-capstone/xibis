import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {

  return (
    <div id="menu" >
      <Link to='/map'><div>map</div></Link>
    </div>
  )
}

export default Menu
