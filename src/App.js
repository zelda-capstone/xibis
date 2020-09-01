import React from 'react'
import {Route, BrowserRouter as Router } from 'react-router-dom'
import {withAuthentication} from './components/Auth'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from './constants/routes'
import './index.css'

import { LandingPage, Login, SignUpPage, Twinkle, Game } from './components'

class App extends React.Component {

  render() {
    const session = this.props.session;
    //console.log(session)

    return (
      <>
        <Router>
          <Route component={Twinkle} />
          {
            !session ? (
              <>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.LOG_IN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              </>
            ) : (
              <>
                <Route path={ROUTES.LANDING} component={Game} />
              </>
            )
          }
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

const mapDispatch = (dispatch) => {
  return {
    // setUser: (userId) => dispatch(setUserOnState(userId)),
  }
}

export default compose(connect(mapState, mapDispatch), withAuthentication)(App)

