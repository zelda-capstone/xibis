import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {withAuthentication} from './Auth'
import {compose} from 'recompose'

import { setUserOnState } from '../store/reducers/user'
import { resetBubosCollection, getBubosCollection } from '../store/reducers/bubo'
import { resetPuzzlesCollection, getPuzzlesCollection } from '../store/reducers/puzzle'

class StartGame extends React.Component {

  startGame = () => {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.resetPuzzles(puzzlesRef);
    // create + fill a puzzles subcollection?

    const bubosRef = this.props.user.bubosRef
    if (bubosRef) {
      this.props.resetBubos(bubosRef)
    }
  }

  loadGame = () => {
    // check to see if they have a game to load
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
