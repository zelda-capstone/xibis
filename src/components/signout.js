import React from 'react'
import { withFirebase } from '../firebase'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const SignOut = props => {
  return (
    <button
      type='button'
      onClick={() => {
        props.firebase.doSignOut();
        // also should reset the user on game state to {}
        props.history.push(ROUTES.LANDING)
      }}>
        Sign-out
    </button>
  )
}

export default withFirebase(withRouter(SignOut))
