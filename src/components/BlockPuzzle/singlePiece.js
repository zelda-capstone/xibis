import React from 'react'
import Draggable from 'react-draggable'
import addPiece from '../../store/reducers/block-puzzle'
import {connect} from 'react-redux'

export class SinglePiece extends React.Component {
  constructor() {
    super()
    this.state = {
      correct: false,
    }
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag(e, ui, correctPos) {
    const currentPosX = ui.lastX
    const currentPosY = ui.lastY
    console.log(currentPosX, currentPosY)
    if (currentPosX === correctPos[0] && currentPosY === correctPos[1]) {
      console.log('correct!')
      this.setState({correct: true})
      this.props.tallyPiece()
      //add some sore of visual cue to let player know they have placed piece correctly
      //add to the tally of total correct pieces
    } else {
      console.log('keep trying!')
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

const mapDispatch = (dispatch) => ({
  tallyPiece: () => dispatch(addPiece()),
})

export default connect(null, mapDispatch)(SinglePiece)
