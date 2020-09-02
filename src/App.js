import React from 'react'
import {Route, BrowserRouter as Router } from 'react-router-dom'
import {withAuthentication} from './components/Auth'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from './constants/routes'
import './index.css'
import PropTypes from 'prop-types'
import { createBrowserHistory } from 'history'


import { LandingPage, Login, SignUpPage, Twinkle, Game } from './components'

const history = createBrowserHistory()

class App extends React.Component {

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    console.log('isLoggedIn:  ', isLoggedIn)

    return (
      <>
        <Router history={history} >
          <Route component={Twinkle} />
          {
            !this.props.isLoggedIn ? (
              <Router>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.LOG_IN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              </Router>
            ) : (
              <Router>
                <Route path={ROUTES.LANDING} component={Game} />
              </Router>
            )
          }
        </Router>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    session: state.session,
    isLoggedIn: !!state.session.authUser
  }
}

export default compose(connect(mapState), withAuthentication)(App)

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
