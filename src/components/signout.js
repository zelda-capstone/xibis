import React from 'react'
import { withFirebase } from '../firebase'
import { withRouter, Redirect } from 'react-router-dom'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from '../constants/routes'
import * as ACTIONS from '../constants/actions'

class SignOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: true }
  }

  handleSignout = () => {
    this.props.firebase.doSignOut()
    .then(() => {
      this.props.setAuthUser(null)
    })
    .then(() => {
      this.props.setUser({})
    })
    .then(() => {
      this.props.history.push(ROUTES.LANDING)
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    // if (!this.props.session) return (
    //   <Redirect to={ROUTES.LANDING} />
    // )
    return (
      <>
      {
        this.state.loggedIn ? (
          <button
            type='button'
            onClick={this.handleSignout}>
              Sign-out
          </button>
        ) : (
          <Redirect to={ROUTES.LANDING} />
        )
      }

      </>
    )
  }
}

const mapState = state => {
  return {
    session: state.session
  }
}

const mapDispatch = dispatch => {
  return {
    setUser: user => dispatch({ type: ACTIONS.SET_USER, user}),
    setAuthUser: authUser => dispatch({ type: 'SET_AUTH_USER', authUser })
   }
}

export default compose(
  withFirebase,
  withRouter,
  connect(mapState, mapDispatch)
)(SignOut)
