import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//import { setUser } from '../store/reducers/user'
import { resetBubosCollection, getBubosCollection } from '../store/reducers/bubo'
import { resetPuzzlesCollection, getPuzzlesCollection } from '../store/reducers/puzzle'

class StartGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingGame: false,
      gameLoaded: false
    }
  }

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
    this.setState({ loadingGame: true })
    const bubosRef = this.props.user.bubosRef
    const puzzlesRef = this.props.user.puzzlesRef
    if (bubosRef) {
      this.props.getPuzzles(puzzlesRef);
      this.props.getBubos(bubosRef)
      this.setState({ loadingGame: false, gameLoaded: true })
    } else {
      this.setState({ loadingGame: false })
    }
  }

  render() {
    if (this.state.loadingGame) {
      return (
        <div>Loading...</div>
      )
    }

    if (this.state.gameLoaded) {
      return <Redirect to='/map' />
    }

    return (
      <div id='start-container'>
        <Link to='/intro' onClick={this.startGame} >
          <div>start new journey</div>
        </Link>
        <div onClick={this.loadGame}>load game</div>
      </div>
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
    // setUser: userRef => dispatch(setUserOnState(userRef)),
    resetBubos: bubosRef => dispatch(resetBubosCollection(bubosRef)),
    resetPuzzles: puzzlesRef => dispatch(resetPuzzlesCollection(puzzlesRef)),
    getBubos: bubosRef => dispatch(getBubosCollection(bubosRef)),
    getPuzzles: puzzlesRef => dispatch(getPuzzlesCollection(puzzlesRef))
  }
}

export default connect(mapState, mapDispatch)(StartGame)
