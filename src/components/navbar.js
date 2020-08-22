import React from 'react'
import firebase from "firebase/app"

const NavBar = () => {
  return (
    <div id='navbar'>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  )
}

export default NavBar
