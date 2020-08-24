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
        //props.updateState({ user: {} })
        props.history.push(ROUTES.LANDING)
      }}>
        Sign-out
    </button>
  )
}

export default withFirebase(withRouter(SignOut))
