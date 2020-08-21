import React from 'react'
import { Link } from 'react-router-dom'
import { MapIcon } from '../components'

const Map = (props) => {
  return (
    <>
      <div id='map-container'>
        <h1>Game Map</h1>
        <img id='map-background' alt='space-background' src='map-background.jpg' />
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
