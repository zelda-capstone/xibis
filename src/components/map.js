import React from 'react'
import {connect} from 'react-redux'
import {MapIcon} from '../components'

import {getUnlockedPuzzles} from '../store/reducers/puzzle'

class Map extends React.Component {
  componentDidMount() {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.getPuzzles(puzzlesRef)
  }

  render() {
    const puzzles = this.props.puzzles || []
    return (
      <>
        <div className="clouds" style={{ backgroundImage: 'url(https://i.ibb.co/1ZK2Vpc/purple-fog.png)' }}> </div>
        <div id="map-container">
          <h1>map</h1>
          <div id="map">
            {puzzles ? (
              puzzles.map((puzzle) => {
                return (
                  <div key={puzzle.name}>
                    <MapIcon puzzle={puzzle} />
                  </div>
                )
              })
            ) : (
              <h3> loading... </h3>
            )}
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
