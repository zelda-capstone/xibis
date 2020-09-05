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
      msg: '',
      music: 0
    }
    this.bubosRef = this.props.user.bubosRef
    this.puzzlesRef = this.props.user.puzzlesRef
  }

  componentDidMount() {
    this.setState({ music: this.props.sounds.play('bubos_theme') })
  }

  componentWillUnmount() {
    this.props.sounds.fade(this.props.sounds.volume(), 0, 1000, this.state.music)
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
    console.log(this.state.music)
    if (this.state.activeGame) {
      return (
        <Redirect to='/map' />
      )
    }

    return (
      <div className='start-container fade-in'>
        <Link to={{ pathname: '/intro', state: { music: this.state.music }}} onClick={this.startGame} >
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
