import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import {withAuthentication} from './components/Auth'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from './constants/routes'
import './index.css'

import {setUserOnState} from './store/reducers/user'

import { Login, SignUpPage, Twinkle, Game } from './components'

class App extends React.Component {
  componentDidMount() {
    console.log(this.props.session)
  }

  render() {
    const authUser = this.props.session.authUser;

    return (
      <>
        <Router>
          <Route component={Twinkle} />
          {
            !authUser ? (
              <Switch>
                <Route path={ROUTES.LOG_IN} render={() => <Login />} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              </Switch>
            ) : (
              <>
              <Game />
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
    setUser: (userId) => dispatch(setUserOnState(userId)),
  }
}

export default compose(connect(mapState, mapDispatch), withAuthentication)(App)
