import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div id='landing'>
    <h1>WELCOME!</h1>
    <div className="container">
      <Link to='/login'><span>Login!</span></Link>
      <span>OR</span>
      <Link to='/signup'><span>Sign up!</span></Link>
    </div>
  </div>
);

export default Landing;
