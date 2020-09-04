import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {withAuthentication} from './components/Auth'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from './constants/routes'
import './index.css'

import { LandingPage, Login, SignUpPage, Twinkle, Game, NotFound } from './components'


const App = (props) => {
    const { authUser } = props.session

    return (
      <>
        <Route component={Twinkle} />
          {
            !authUser ? (
              <Switch>
                <Route path={ROUTES.LOG_IN} component={Login} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.NOT_FOUND}  component={NotFound} />
              </Switch>
            ) : (
              <Game />
            )
          }
      </>
    )
}

const mapState = (state) => {
  return {
    session: state.session,
  }
}

export default compose(connect(mapState), withAuthentication)(App)
