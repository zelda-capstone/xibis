import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { withAuthentication } from './components/Auth';
import * as ROUTES from './constants/routes';
//import firebase, { auth, db } from './firebase/firebase.js'

import {
  Login,
  SignUpPage,
  LandingPage,
  Twinkle,
  NavBar,
  StartGame,
  Intro,
  BuboSelector,
  Map,
  TestPuzzle,
  Menu,
  Hint,
  User
} from './components'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {}
  }

  // login = async userId => {
  //   const userRef = this.props.firebase.user(userId)
  //   this.setState({ userRef })

  //   const user = await userRef.get()
  //   const data = user.data();
  //   this.setState({ user: data })

  //   userRef.onSnapshot(snapshot => {
  //     this.setState({ user: snapshot.data() })
  //   })
  // }

  render() {
    // const firebase = this.props.firebase;

    return(
      <>
        <Router>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.LOG_IN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route component={Twinkle} />
          <Route component={NavBar} />
          <Route path={ROUTES.START} component={StartGame} />
          <Route exact path={ROUTES.INTRO} component={Intro} />
          <Route exact path={ROUTES.ASSEMBLE_BUBOS} component={BuboSelector} />
          <Route exact path={ROUTES.HINT} component={Hint} />
          <Route exact path={ROUTES.MAP} component={Map}/>
          <Route exact path={ROUTES.TEST} component={TestPuzzle}/>
          <Route exact path={ROUTES.USER} component={User} />
          <Route component={Menu} />
        </Router>
      </>
    )
  }
}


export default withAuthentication(App);
