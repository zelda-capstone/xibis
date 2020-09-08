import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => (
  <div id="landing">
    <div id="landing-title">
      <h1>Xibis: A Galactic Voyage</h1>
    </div>
    <div id="logo-image"></div>
    <div className="container">
      <Link to="/login">
        <span>Login</span>
      </Link>
      <span>OR</span>
      <Link to="/signup">
        <span>Sign up</span>
      </Link>
    </div>
  </div>
)

export default Landing
