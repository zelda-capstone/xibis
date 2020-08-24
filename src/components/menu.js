import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  const next = '/play'
  //hardcode this to 'play' for now
  //in future, it will receive whatever route is "next" in the narrative
  return (
    <div id='menu'>
      <Link to='hint'><div>?</div></Link>
      <Link to='/map'><div>Map</div></Link>
      <Link to={next}><div>Next</div></Link>
    </div>
  )
}

export default Menu
