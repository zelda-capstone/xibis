import React from 'react'
import {connect} from 'react-redux'
import {MapIcon} from '../components'
import {getUnlockedPuzzles} from '../store/reducers/puzzle'

class Map extends React.Component {
  constructor() {
    super()
    this.music = 0;
  }
  componentDidMount() {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.getPuzzles(puzzlesRef)
    this.music = this.props.sounds.play('sad_bubos')
  }

  componentWillUnmount() {
    this.props.sounds.fade(this.props.sounds.volume(), 0, 800, this.music)
  }

  render() {
    let puzzles = this.props.puzzles || []
    //puzzles = puzzles.reverse()

    return (
      <>
        {/* <div className="clouds" style={{ backgroundImage: 'url(https://i.ibb.co/1ZK2Vpc/purple-fog.png)' }}> </div> */}
        <div id='map-grid-container'>
          <div id="map-grid">
            {
              puzzles && (puzzles.map((puzzle) => {
                return <MapIcon key={puzzle.name} puzzle={puzzle} />
              }))
            }
          </div>
        </div>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    puzzles: state.puzzles,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getPuzzles: (puzzleRef) => dispatch(getUnlockedPuzzles(puzzleRef)),
  }
}

export default connect(mapState, mapDispatch)(Map)
