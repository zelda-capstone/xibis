import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetBubosCollection, getBubosCollection } from '../store/reducers/bubo'
import { resetPuzzlesCollection, getUnlockedPuzzles } from '../store/reducers/puzzle'

class StartGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingGame: false,
      activeGame: false,
      msg: ''
    }
    this.bubosRef = this.props.user.bubosRef
    this.puzzlesRef = this.props.user.puzzlesRef
  }


  startGame = () => {
    this.props.resetPuzzles(this.puzzlesRef);
    this.props.resetBubos(this.bubosRef)
  }

  loadGame = async () => {
    await this.props.getBubos(this.bubosRef)
    if (this.props.bubos.length === 10) {
      this.props.getPuzzles(this.puzzlesRef);
      this.setState({ activeGame: true })
    } else {
      this.setState({
        activeGame: false,
        msg: `You don't have an active game right now.`
      })
    }
  }

  render() {
    if (this.state.activeGame) {
      return (
        <Redirect to='/map' />
      )
    }

    return (
      <div id='start-container'>
        <Link to='/intro' onClick={this.startGame} >
          <div>start new journey</div>
        </Link>
        <div onClick={this.loadGame}>load game</div>
        <div style={{ fontSize: '1rem' }}>{this.state.msg}</div>
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
    resetBubos: bubosRef => dispatch(resetBubosCollection(bubosRef)),
    resetPuzzles: puzzlesRef => dispatch(resetPuzzlesCollection(puzzlesRef)),
    getBubos: bubosRef => dispatch(getBubosCollection(bubosRef)),
    getPuzzles: puzzlesRef => dispatch(getUnlockedPuzzles(puzzlesRef))
  }
}

export default connect(mapState, mapDispatch)(StartGame)
