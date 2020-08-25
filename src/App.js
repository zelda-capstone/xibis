import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { withAuthentication } from './components/Auth';
import * as ROUTES from './constants/routes';

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
  LostAndFound,
  Menu,
  Hint,
  User
} from './components'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userRef: {},
      user: {}
    }
  }

  setUserOnState = async (userId) => {
    const userRef = this.props.firebase.gameState(userId)
    const user = await userRef.get()
    //right now this gets the whole user but we probably just want their game state subcollection
    const data = user.data();
    this.setState({ user: data })

    // commented out code 'subscribes' to changes in user state
    // userRef.onSnapshot(snapshot => {
    //   this.setState({ user: snapshot.data() })
    // })
    console.log('user on app state: ', this.state.user);
  }

  render() {
    return(
      <>
        <Router>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route
            path={ROUTES.LOG_IN}
            render={() => <Login setUserOnState={this.setUserOnState}/>}
          />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route component={Twinkle} />
          <Route component={NavBar} />
          <Route path={ROUTES.START} component={StartGame} />
          <Route exact path={ROUTES.INTRO} component={Intro} />
          <Route
            exact path={ROUTES.ASSEMBLE_BUBOS}
            render={() => <BuboSelector user={this.state.user} />} />
          <Route exact path={ROUTES.HINT} component={Hint} />
          <Route exact path={ROUTES.MAP} component={Map}/>
          <Route exact path={ROUTES.TEST} component={TestPuzzle}/>
          <Route exact path={ROUTES.LOST_AND_FOUND} component={LostAndFound}/>
          <Route exact path={ROUTES.USER} component={User} />
          <Route component={Menu} />
        </Router>
      </>
    )
  }
}


export default withAuthentication(App);
