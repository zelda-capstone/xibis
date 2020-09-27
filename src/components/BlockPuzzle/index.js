import React from 'react'
import {connect} from 'react-redux'
import {Howl} from 'howler'
import Board from './board'
import AllPieces from './allPieces'
import Destination from './ImageAssets/pawel-czerwinski-F_dg3zc95Jc-unsplash.jpg'
import BuboContainer from './bubo-container'
import {unlockPuzzleInDb} from '../../store/reducers/puzzle'
import Typewriter from 'typewriter-effect'

export class BlockPuzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      puzzleState: 'intro',
    }
    this.startPlaying = this.startPlaying.bind(this)
    this.handleWin = this.handleWin.bind(this)
    this.music = new Howl({
      src: ['audio/music/block_puzzle.webm', 'audio/music/block_puzzle.mp3'],
      html5: true,
      loop: true
    })
  }

  componentDidMount() {
    this.music.play()
  }

  componentWillUnmount() {
    this.music.fade(this.music.volume(), 0, 1000)
  }

  startPlaying() {
    this.setState({puzzleState: 'playing'})
  }

  handleWin() {
    this.props.effects.play('win_sound')
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.unlockPuzzle(puzzlesRef, 'wormhole')
  }

  render() {
    if (this.state.puzzleState === 'intro') {
      return (
        <>
        <div id="block-puzzle-main" >
          You can see the planet Tessera in the distance. It glows with marbled
          brilliance among the twinkling stars. Your destination is near, but
          just out of reach. You will need to build a celestial bridge for your
          Xibis.
          <Typewriter className='typewriter' onInit={typewriter => {
            typewriter.typeString('Are you ready to begin?')
            .start();
          }} />
          <div>
            <button
              className="button"
              type="button"
              onClick={() => {
                this.startPlaying()
              }}
            >
              yes!
            </button>
          </div>
                </div>
        </>
      )
    }

    let puzzleText = 'Position the pieces on the board until they stick.'
    const winCondition = this.props.totalCorrect === 12
    if (winCondition) {
      puzzleText = 'You won! Congratulations!'
      this.handleWin()
      this.props.effects.play('win_sound')
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
            <AllPieces effects={this.props.effects} />
          </div>
          <div>
            <img
              alt="your destination, the planet Tessera, a dark purple and blue sphere"
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
  user: reduxState.user,
})

const mapDispatch = (dispatch) => ({
  unlockPuzzle: (puzzlesRef, id) => {
    dispatch(unlockPuzzleInDb(puzzlesRef, id))
  },
})

export default connect(mapState, mapDispatch)(BlockPuzzle)
