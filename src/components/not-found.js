import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const NotFound = () => (
  <div className="auth">
    <h1>404!</h1>
    <h2>This route through space was not found...</h2>
    <h2><Link to={ROUTES.LANDING}>Home</Link></h2>
  </div>
);

export default NotFound;
