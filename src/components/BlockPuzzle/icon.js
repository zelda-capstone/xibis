import React from 'react'
import Draggable from 'react-draggable'
/*
import Piece01 from './ImageAssets/puzzle-piece-01.svg'
import Piece02 from './ImageAssets/puzzle-piece-02.svg'
import AllPieces from './ImageAssets/puzzle-pieces-separate.svg'
*/
import {PiecesArray} from './ImageAssets/index'

//here's my new attempt!
export default class Icon extends React.Component {
  constructor() {
    super()
  }

  render() {
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
              grid={[50, 50]}
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
}
