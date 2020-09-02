import React from 'react'
import { Link } from 'react-router-dom'

const MapIcon = (props) => {
  const puzzle = props.puzzle;
  //console.log(puzzle)
  return (
    <>
      <Link to={`/${puzzle.name}`}>
        <div
          className='map-icon'
          style={{backgroundImage: `url(${puzzle.imageUrl})`}}>
        </div>
        <div className='puzzle-stats'>
          <span><strong>PUZZLE</strong>: {puzzle.name}</span>
          <span><strong>PLANET</strong>: {puzzle.planet}</span>
        </div>
      </Link>
    </>
  )
}

export default MapIcon;
