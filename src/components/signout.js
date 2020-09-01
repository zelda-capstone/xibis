import React from 'react'
import { withFirebase } from '../firebase'
import { withRouter } from 'react-router-dom'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from '../constants/routes'
import * as ACTIONS from '../constants/actions'

const SignOut = props => {
  const handleSignout = () => {
    props.firebase.doSignOut()
    .then(() => {
      props.setUser({})
    })
    .then(() => {
      props.history.push(ROUTES.LANDING)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <button
      type='button'
      onClick={handleSignout}>
        Sign-out
    </button>
  )
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
