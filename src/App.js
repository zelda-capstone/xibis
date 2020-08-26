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

//import setUser from './store/reducers/user'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  setUser = async (userId) => {
    const userRef = this.props.firebase.user(userId)
    const bubosRef = this.props.firebase.bubos(userId)

    const user = await userRef.get()
    const data = user.data();

    data.id = userId;
    data.userRef = userRef;
    data.bubosRef = bubosRef

    this.props.setUserOnState(data)
  }

  render () {
    return (
      <>
        <Router>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route
            path={ROUTES.LOG_IN}
            render={() => <Login setUser={this.setUser}/>}
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

const mapDispatch = dispatch => {
  return {
    setUserOnState: userData => dispatch({ type: 'SET_USER', user: userData })
  }
}


export default compose(connect(mapState, mapDispatch), withAuthentication)(App);


