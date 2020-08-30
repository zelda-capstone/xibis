
import React from 'react'

const MapIcon = (props) => {
  const puzzle = props.puzzle;
  return (
    <>
      <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="grey" strokeWidth="6" fill="black" />
      </svg>
      <div
        className='map-icon'
        style={{backgroundImage: `url(${puzzle.imageUrl})`}}></div>
    {/* <div className='puzzle-stats'>
      <span>{puzzle.name}</span>
      <span>{puzzle.planet}</span>
    </div> */}
    </>
  )
}

export default MapIcon;
