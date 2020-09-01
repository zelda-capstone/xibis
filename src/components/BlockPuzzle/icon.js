import React from 'react'
import Draggable from 'react-draggable'
import {PiecesArray} from './ImageAssets/index'

export default class Icon extends React.Component {
  constructor() {
    super()
    this.state = {
      position: {
        x: 0,
        y: 0,
      },
    }
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag(e, ui, piece) {
    const currentPosX = ui.lastX
    const currentPosY = ui.lastY
    console.log('x ', currentPosX)
    console.log('y ', currentPosY)
    console.log('piece ', e.target)
    /*
    const currentPos = [ui.lastX, ui.lastY]
    if (currentPos === piece.location) {
      console.log('that is correct!')

    }
    */
    //if location === correctLocation then set piece.disabled = true
    //that should make the piece 'stick' to the correct location!
    //maybe add some sort of visual or audio cue to let player know that the piece is set
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
        {PiecesArray.map((piece, index) => {
          return (
            <Draggable
              grid={[50, 50]}
              positionOffset={{x: 0, y: 0}}
              key={index}
              onStop={(e, ui, piece) => {
                this.handleDrag(e, ui, piece)
              }}
              value={index}
            >
              <div
                value={piece.location}
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
