import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MapIcon } from '../components'

import { getPuzzlesCollection } from '../store/reducers/puzzle'

class Map extends React.Component {
  componentDidMount() {
    const puzzlesRef = this.props.user.puzzlesRef
    this.props.getPuzzles(puzzlesRef);
    // get puzzles where unlocked = true ?
  }

  render() {
    const puzzles = this.props.puzzles || [];
    return (
      <>
        <div id='map-container'>
          <h1>Map</h1>
            <div id='map'>
              {
                puzzles ? (
                  (
                    puzzles.map(puzzle => {
                      return (<div key={puzzle.name}>
                        <Link to={`/${puzzle.name}`}>
                          <MapIcon puzzle={puzzle} />
                        </Link>
                      </div>)
                    })
                  )
                ) : (<h3> Loading... </h3>)
              }
              {/* <div>
                <Link to='/test-puzzle'>
                    <MapIcon />
                </Link>
                </div>
              <div>
                <Link to='/wormhole'>
                  <MapIcon  />
                </Link>
              </div>
              <div>
                <Link to='/lost-and-found'>
                  <MapIcon  />
                </Link>
              </div>
              <div>
                <Link to='/block-puzzle'>
                  <MapIcon  />
                </Link>
              </div> */}
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
    getPuzzles: puzzleRef => dispatch(getPuzzlesCollection(puzzleRef))
  }
}

export default connect(mapState, mapDispatch)(Map)
