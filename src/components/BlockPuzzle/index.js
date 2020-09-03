import React from 'react'
import {connect} from 'react-redux'
import Board from './board'
import AllPieces from './allPieces'
import Destination from './ImageAssets/pawel-czerwinski-F_dg3zc95Jc-unsplash.jpg'
import BuboContainer from './bubo-container'

export class BlockPuzzle extends React.Component {
  constructor() {
    super()
    this.state = {
      puzzleState: 'intro',
    }
    this.startPlaying = this.startPlaying.bind(this)
    this.handleWin = this.handleWin.bind(this)
  }

  startPlaying() {
    console.log("let's get started")
    this.setState({puzzleState: 'playing'})
  }

  handleWin() {
    console.log('congratulations, you won!')
    this.setState({puzzleState: 'win'})
  }

  render() {
    if (this.state.puzzleState === 'intro') {
      return (
        <div
          style={{
            display: 'flex',
            width: '95vw',
            height: '95vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Intro Text. Are you ready to play the game?
          <button
            type="button"
            onClick={() => {
              this.startPlaying()
            }}
          >
            Yes!
          </button>
        </div>
      )
    }

    let puzzleText =
      'The bubos need to cross a celestial bridge. Position the pieces on the board until they stick.'
    const winCondition = this.props.totalCorrect === 12
    if (winCondition) {
      puzzleText = 'you won! congratulations!'
    }

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '1em'}}>
          {puzzleText}
        </div>
        <div
          style={{
            margin: '1em',
            width: '95vw',
            height: '95vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <div style={{width: '25vw'}}>
            <BuboContainer />
          </div>
          <div>
            <Board />
            <AllPieces />
          </div>
          <div>
            <img
              alt="your destination planet, a dark purple and blue sphere"
              src={Destination}
              style={{width: '25vw'}}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (reduxState) => ({
  totalCorrect: reduxState.blockPuzzle,
})

export default connect(mapState)(BlockPuzzle)
