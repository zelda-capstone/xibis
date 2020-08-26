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


