import React from 'react'
import { Link } from 'react-router-dom'
import { MapIcon } from '../components'

//map user.gameState.completedPuzzles in a list here

const Map = (props) => {
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
              <Link to='/test-puzzle'>
                <MapIcon />
              </Link>
              </div>
            <div>
              <Link to='/test-puzzle'>
                <MapIcon />
              </Link>
            </div>
            <div>
              <Link to='/test-puzzle'>
                <MapIcon />
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}


export default Map
