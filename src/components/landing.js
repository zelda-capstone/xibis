import React from 'react';
import SignUpPage from './signup'
import Login from './login'
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <h1>WELCOME!</h1>
    <div className="container">
    <Link to='/login'>Login!</Link>
    <Link to='/signup'>Sign up!</Link>
    </div>
  </div>
);

export default Landing;