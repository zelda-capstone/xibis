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

  handleDrag(e, ui) {
    const {x, y} = this.state.position
    this.setState({
      position: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    })
    console.log('my location ', x, y)
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
              positionOffset={{x: 0, y: 0}}
              key={piece.index}
              onDrag={this.handleDrag}
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
