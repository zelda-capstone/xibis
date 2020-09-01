import React from 'react'
import Draggable from 'react-draggable'
import {PiecesArray} from './ImageAssets/index'

export default class Icon extends React.Component {
  constructor() {
    super()
    this.state = {
      pieceStatus: false,
    }
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag(e, ui, position) {
    console.log('event ', e)
    console.log('ui ', ui)
    const currentPosX = ui.lastX
    const currentPosY = ui.lastY
    if (currentPosX === position[0] && currentPosY === position[1]) {
      console.log('correct!')
      this.setState = {
        pieceStatus: true,
      }
      //that should make the piece 'stick' to the correct location!
      //maybe add some sort of visual or audio cue to let player know that the piece is set
    } else {
      console.log('keep trying!')
    }
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
          const position = piece.location
          return (
            <Draggable
              grid={[50, 50]}
              positionOffset={{x: 0, y: 0}}
              key={index}
              disabled={this.state.pieceStatus}
              onStop={(e, ui) => {
                this.handleDrag(e, ui, position)
              }}
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
