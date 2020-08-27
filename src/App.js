import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {withAuthentication} from './components/Auth'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from './constants/routes'
import './index.css'

import { setUserOnState } from './store/reducers/user'

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
  User,
  BlockPuzzle,
} from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  componentDidMount() {
    const authUser = JSON.parse(localStorage.getItem('authUser'))

    const user = {
      // id: authUser.uid,
      username: authUser.username,
      userRef: this.props.firebase.user(authUser.uid),
      bubosRef: this.props.firebase.bubos(authUser.uid)
    }
    this.props.setUser(user);
  }

  render () {
    return (
      <>
        <Router>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.LOG_IN} render={() => <Login />} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route component={Twinkle} />
          <Route component={NavBar} />
          <Route path={ROUTES.START} component={StartGame} />
          <Route exact path={ROUTES.INTRO} component={Intro} />
          <Route
            exact
            path={ROUTES.ASSEMBLE_BUBOS}
            render={() => <BuboSelector user={this.props.user} />}
          />
          <Route exact path={ROUTES.HINT} component={Hint} />
          <Route exact path={ROUTES.MAP} component={Map}/>
          <Route exact path={ROUTES.TEST} component={TestPuzzle}/>
          <Route exact path={ROUTES.LOST_AND_FOUND}
            render={() => <LostAndFound user={this.props.user}/>} />
          <Route exact path={ROUTES.USER} component={User} />
          <Route exact path={ROUTES.BLOCK_PUZZLE} component={BlockPuzzle} />
          <Route component={Menu} />
        </Router>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,

    session: state.session
  }
}

const mapDispatch = dispatch => {
  return {
    setUser: userId => dispatch(setUserOnState(userId))
  }
}


export default compose(connect(mapState, mapDispatch), withAuthentication)(App);

