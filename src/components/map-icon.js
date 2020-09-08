import React from 'react'
import { Link } from 'react-router-dom'

const MapIcon = (props) => {
  const puzzle = props.puzzle;
  console.log(puzzle.name)

  return (
    <div className={`${puzzle.name}-map-container`} >
      <Link to={`/${puzzle.name}`} >
        <div
          className={`map-icon`}
          style={{backgroundImage: `url(${puzzle.imageUrl})`}}>
        </div>
        <div className='puzzle-stats'>
          <div>
            <span><strong>PUZZLE</strong>:</span>
            <span> {puzzle.name}</span>
          </div>
          <div>
            <span><strong>PLANET</strong>:</span>
            <span> {puzzle.planet}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MapIcon;
