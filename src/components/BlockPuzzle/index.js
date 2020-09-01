import React from 'react'
import Board from './board'
import AllPieces from './allPieces'
import Destination from './ImageAssets/pawel-czerwinski-F_dg3zc95Jc-unsplash.jpg'
import BuboContainer from './bubo-container'

export default function BlockPuzzle() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', margin: '1em'}}>
        The bubos need your help to cross a celestial bridge. Use the pieces to
        fill in the bridge so they can cross to the next planet!
      </div>
      <div
        style={{
          margin: '1em',
          width: '95vw',
          height: '95vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <div style={{width: '25vw'}}>
          <BuboContainer />
        </div>
        <div>
          <Board />
          <AllPieces />
        </div>
        <div>
          <img
            alt="your destination planet, a dark purple and blue sphere"
            src={Destination}
            style={{width: '25vw'}}
          />
        </div>
      </div>
    </div>
  )
}
