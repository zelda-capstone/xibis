import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MapIcon, } from '../components'

import { fetchPuzzles } from '../store/reducers/puzzle'

//map user.gameState.completedPuzzles + next available puzzle in a list here (hardcoded for now)

class Map extends React.Component {
  componentDidMount() {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.getPuzzles(puzzlesRef);
  }

  render() {
    //console.log('puzzles:', this.props.puzzles);
    return (
      <>
        <div id='map-container'>
          <h1>Map</h1>
            <div id='map'>
              <div>
                <Link to='/test-puzzle'>
                    <MapIcon />
                </Link>
                </div>
              <div>
                <Link to='/wormhole'>
                  <MapIcon/>
                </Link>
              </div>
              <div>
                <Link to='/lost-and-found'>
                  <MapIcon />
                </Link>
              </div>
              <div>
                <Link to='/block-puzzle'>
                  <MapIcon />
                </Link>
              </div>
          </div>
        </div>
      </>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    puzzles: state.puzzles
  }
}

const mapDispatch = dispatch => {
  return {
    getPuzzles: puzzleRef => dispatch(fetchPuzzles(puzzleRef))
  }
}

export default connect(mapState, mapDispatch)(Map)
