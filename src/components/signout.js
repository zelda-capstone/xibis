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
      this.props.setUser({})
    })
    .then(() => {
      this.setState({loggedIn: false})
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    if (!this.state.loggedIn) return (
      <Redirect to={ROUTES.LANDING} />
    )
    return (
      <button
        type='button'
        onClick={this.handleSignout}>
          Sign-out
      </button>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    setUser: user => dispatch({ type: ACTIONS.SET_USER, user})
   }
}

export default compose(
  withFirebase,
  withRouter,
  connect(null, mapDispatch)
)(SignOut)
