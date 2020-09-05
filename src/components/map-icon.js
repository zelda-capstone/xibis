import React from 'react'
import { Link } from 'react-router-dom'

const MapIcon = (props) => {
  const puzzle = props.puzzle;
  //console.log(puzzle)
  return (
    <div className={`map-icon-container order-${puzzle.order}`}>
      <Link to={`/${puzzle.name}`} >
        <div
          className='map-icon'
          style={{backgroundImage: `url(${puzzle.imageUrl})`}}>
        </div>
        <div className='puzzle-stats'>
          <span><strong>PUZZLE</strong>: {puzzle.name}</span>
          <span><strong>PLANET</strong>: {puzzle.planet}</span>
        </div>
      </Link>
    </div>
  )
}

export default MapIcon;
