import React from 'react'
import Draggable from 'react-draggable'
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
              defaultPosition={{x: 0, y: 0}}
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
