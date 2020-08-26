import React from 'react'
import {Link} from "react-router-dom"
import {SignOut} from '../components'

const NavBar = (props) => {
  return (
    <div id='navbar'>
      <SignOut />
      <Link to='/home'><button>Progress</button></Link>
    </div>
  )
}

export default NavBar
