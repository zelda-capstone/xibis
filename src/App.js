<<<<<<< HEAD
import React from 'react'
//import { useAuthState } from 'react-firebase-hooks/auth';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/login'
import LandingPage from './components/landing'
import * as ROUTES from './constants/routes'
import {withAuthentication} from './components/Auth'
//import firebase, { auth, db } from './firebase/firebase.js'
import SignUpPage from './components/signup'
import {
=======
import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { withAuthentication } from './components/Auth';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import * as ROUTES from './constants/routes';
import './index.css'

import {
  Login,
  SignUpPage,
  LandingPage,
>>>>>>> 0283dd3e7134f43361180e155f7702a4dbe8c460
  Twinkle,
  NavBar,
  StartGame,
  Intro,
  BuboSelector,
  Map,
  TestPuzzle,
  LostAndFound,
  Menu,
  Hint,
  User,
  BlockPuzzle
} from './components'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log(this.props.user)
    return (
      <>
        <Router>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route
            path={ROUTES.LOG_IN}
            render={() => <Login />}
          />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route component={Twinkle} />
          <Route component={NavBar} />
          <Route path={ROUTES.START} component={StartGame} />
          <Route exact path={ROUTES.INTRO} component={Intro} />
          <Route
            exact path={ROUTES.ASSEMBLE_BUBOS}
            render={() => <BuboSelector user={this.props.user} />} />
          <Route exact path={ROUTES.HINT} component={Hint} />
          <Route exact path={ROUTES.MAP} component={Map}/>
          <Route exact path={ROUTES.TEST} component={TestPuzzle}/>
          <Route exact path={ROUTES.LOST_AND_FOUND} component={LostAndFound}/>
          <Route exact path={ROUTES.USER} component={User} />
          <Route exact path={ROUTES.BLOCK_PUZZLE} component={BlockPuzzle} />
          <Route component={Menu} />
        </Router>
      </>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}


export default compose(connect(mapState), withAuthentication)(App);


