import React from 'react'
import firebase from "firebase/app"
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div id='navbar'>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      <Link to='/home'><button>Progress</button></Link>
    </div>
  )
}

export default NavBar
