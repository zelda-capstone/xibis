import React from 'react'
import Draggable from 'react-draggable'

export default class SinglePiece extends React.Component {
  constructor() {
    super()
    this.state = {
      correct: false,
    }
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag(e, ui, correctPos) {
    console.log('event ', e)
    console.log('ui ', ui)
    const currentPosX = ui.lastX
    const currentPosY = ui.lastY

    if (currentPosX === correctPos[0] && currentPosY === correctPos[1]) {
      console.log('correct!')
      this.setState({correct: true})
      console.log('is it correct? ', this.state.correct)
      //that should make the piece 'stick' to the correct location!
      //maybe add some sort of visual or audio cue to let player know that the piece is set
    } else {
      console.log('keep trying!')
      console.log('is it correct? ', this.state.correct)
    }
  }

  render() {
    const piece = this.props.piece
    const correctPos = piece.location
    return (
      <Draggable
        grid={[50, 50]}
        positionOffset={{x: 0, y: 0}}
        disabled={this.state.correct}
        onStop={(e, ui) => {
          this.handleDrag(e, ui, correctPos)
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
  }
}
