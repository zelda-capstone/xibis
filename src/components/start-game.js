import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {withAuthentication} from './Auth'
import {compose} from 'recompose'

import { setUserOnState } from '../store/reducers/user'
import { resetBubosCollection, getBubosCollection } from '../store/reducers/bubo'
import { resetPuzzlesCollection, getPuzzlesCollection } from '../store/reducers/puzzle'

class StartGame extends React.Component {
  constructor(props) {
    super(props)
    this.authUser = JSON.parse(localStorage.getItem('authUser'))
    if (this.authUser) {
      this.user = {
        username: this.authUser.username,
        userRef: this.props.firebase.user(this.authUser.uid),
        bubosRef: this.props.firebase.bubos(this.authUser.uid),
        puzzlesRef: this.props.firebase.puzzles(this.authUser.uid),
      }
      this.props.setUser(this.user)
    }
  }

  startGame = () => {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.resetPuzzles(puzzlesRef);

    const bubosRef = this.props.user.bubosRef
    if (bubosRef) {
      this.props.resetBubos(bubosRef)
    }
  }

  loadGame = () => {
    const bubosRef = this.props.user.bubosRef
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.getPuzzles(puzzlesRef);
    this.props.getBubos(bubosRef)
  }

  render() {
    return (
      <>
        <div id='start-container'>
          <Link to='/intro' onClick={this.startGame} >
            <div>start new journey</div>
          </Link>
          <Link onClick={this.loadGame} to='/map'>
            <div>load game</div>
          </Link>
        </div>
      </>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    puzzles: state.puzzles,
    bubos: state.bubos
  }
}

const mapDispatch = dispatch => {
  return {
    setUser: userRef => dispatch(setUserOnState(userRef)),
    resetBubos: bubosRef => dispatch(resetBubosCollection(bubosRef)),
    resetPuzzles: puzzlesRef => dispatch(resetPuzzlesCollection(puzzlesRef)),
    getBubos: bubosRef => dispatch(getBubosCollection(bubosRef)),
    getPuzzles: puzzlesRef => dispatch(getPuzzlesCollection(puzzlesRef))
  }
}

export default compose(connect(mapState, mapDispatch), withAuthentication)(StartGame)
