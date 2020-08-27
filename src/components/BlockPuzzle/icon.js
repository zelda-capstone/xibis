import React from 'react'
import Draggable from 'react-draggable'
import Piece01 from './ImageAssets/puzzle-piece-01.svg'
import Piece02 from './ImageAssets/puzzle-piece-02.svg'
import AllPieces from './ImageAssets/puzzle-pieces-separate.svg'

export default function Icon() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Draggable grid={[100, 100]} defaultPosition={{x: 0, y: 22}}>
        <div
          style={{
            backgroundImage: `url(${Piece01})`,
            height: '200px',
            width: '300px',
          }}
        ></div>
      </Draggable>
      <Draggable grid={[100, 100]} defaultPosition={{x: 0, y: 22}}>
        <div
          style={{
            backgroundImage: `url(${Piece02})`,
            height: '100px',
            width: '500px',
          }}
        ></div>
      </Draggable>
    </div>
  )
}

/*
this is the one I'm working on, to get all the pieces to render separately (probably based on background image settings)

export default function Icon() {
  return (
    <Draggable>
      <div
        style={{
          backgroundImage: `url(${AllPieces})`,
          height: '200px',
          width: '300px',
        }}
      ></div>
    </Draggable>
  )
}

*/
