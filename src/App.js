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
  Twinkle,
  NavBar,
  StartGame,
  Intro,
  BuboSelector,
  Map,
  TestPuzzle,
  Menu,
  Hint,
  User,
  BlockPuzzle,
} from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.LOG_IN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route component={Twinkle} />
          <Route component={NavBar} />
          <Route path={ROUTES.START} component={StartGame} />
          <Route exact path={ROUTES.USER} component={User} />
          <Route exact path={ROUTES.ASSEMBLE_BUBOS} component={BuboSelector} />
          <Route exact path={ROUTES.INTRO} component={Intro} />
          <Route exact path={ROUTES.HINT} component={Hint} />
          <Route exact path={ROUTES.MAP} component={Map} />
          <Route exact path={ROUTES.TEST} component={TestPuzzle} />
          <Route exact path={ROUTES.BLOCK_PUZZLE} component={BlockPuzzle} />
          <Route component={Menu} />
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App)
