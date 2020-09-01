import React from 'react'
import Draggable from 'react-draggable'

export default class SinglePiece extends React.Component {
  constructor() {
    super()
    this.state = {
      xPos: 0,
      yPos: 0,
      correct: false,
    }
  }

  render() {
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
        >
      </Draggable>
    )
  }
}
