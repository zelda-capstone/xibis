import React from 'react'
import {Link} from "react-router-dom"
import {SignOut} from '../components'

const NavBar = () => {
  return (
    <div id='navbar'>
      <div>
        <Link to='/'><button className='button'>start over</button></Link>
        </div>
      <div><SignOut /></div>
    </div>
  )
}

export default NavBar
