import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { resetBubosCollection, getBubosCollection } from '../store/reducers/bubo'
import { resetPuzzlesCollection, getPuzzlesCollection } from '../store/reducers/puzzle'

class StartGame extends React.Component {
  // componentDidMount() {
  //   const userRef = this.props.user.userRef
  //   this.props.setUser(userRef)
  // }

  startGame = () => {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.resetPuzzles(puzzlesRef);

    const bubosRef = this.props.user.bubosRef
    if (bubosRef) {
      this.props.resetBubos(bubosRef)
    } else {
      //create a bubo collection?
      //this.props.createBuboCollection(userRef)?
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
          <Link to='/'>
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
    resetBubos: bubosRef => dispatch(resetBubosCollection(bubosRef)),
    resetPuzzles: puzzlesRef => dispatch(resetPuzzlesCollection(puzzlesRef)),
    getBubos: bubosRef => dispatch(getBubosCollection(bubosRef)),
    getPuzzles: puzzlesRef => dispatch(getPuzzlesCollection(puzzlesRef))
  }
}

export default connect(mapState, mapDispatch)(StartGame);
