import React from 'react'
import {Link} from "react-router-dom"
import {SignOut} from '../components'

const NavBar = () => {
  return (
    <div id='navbar'>
      <div>
        <Link to='/'><button className='button'>Start Over</button></Link>
        </div>
      <div><SignOut /></div>
    </div>
  )
}

export default NavBar
