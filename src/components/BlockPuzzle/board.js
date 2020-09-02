import React from 'react'
import PuzzleGrid from './ImageAssets/puzzle-grid.svg'

export default function Board() {
  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        backgroundImage: `url(${PuzzleGrid})`,
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  )
}
