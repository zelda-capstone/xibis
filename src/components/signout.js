import React from 'react'
import { withFirebase } from '../firebase'
import { withRouter } from 'react-router-dom'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import * as ROUTES from '../constants/routes'
import * as ACTIONS from '../constants/actions'

class SignOut extends React.Component {
  handleSignout = () => {
    this.props.firebase.doSignOut()
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
    return (
      <>
        <button
          type='button'
          className='button'
          onClick={this.handleSignout}>
            sign-out
        </button>
      </>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    setUser: user => dispatch({ type: ACTIONS.SET_USER, user}),
   }
}

export default compose(
  withFirebase,
  withRouter,
  connect(null, mapDispatch)
)(SignOut)
