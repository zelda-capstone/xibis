import React from 'react'
import Draggable from 'react-draggable'
/*
import Piece01 from './ImageAssets/puzzle-piece-01.svg'
import Piece02 from './ImageAssets/puzzle-piece-02.svg'
import AllPieces from './ImageAssets/puzzle-pieces-separate.svg'
*/
import {PiecesArray} from './ImageAssets/index'

//here's my new attempt!
export default function Icon() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {PiecesArray.map((piece) => {
        return (
          <Draggable
            grid={[100, 100]}
            defaultPosition={{x: 0, y: 15}}
            key={piece.index}
          >
            <div
              style={{
                backgroundImage: `url(${piece.image})`,
                height: `${piece.height}px`,
                width: `${piece.width}px`,
              }}
            ></div>
          </Draggable>
        )
      })}
    </div>
  )
}

/*
THIS is the component that currently works! just making it more DRY!

export default function Icon() {
  console.log('what can we access? ', Piece01)
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

*/

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
