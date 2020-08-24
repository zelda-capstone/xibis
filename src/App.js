import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from './components/login';
import LandingPage from './components/landing'
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Auth';
import firebase, { auth, db } from './firebase/firebase.js'
import Play from './components/play'
import SignUpPage from './components/signup';



class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Router>
        <div className="container">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.LOG_IN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.HOME} component={Play} />`
        </div>
      </Router>
    )
  }
}
  
  
export default withAuthentication(App);
