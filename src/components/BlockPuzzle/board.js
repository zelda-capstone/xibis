import React from 'react'
import Square from './square'
import Icon from './icon'
import PuzzleGrid from './ImageAssets/puzzle-grid.svg'

export default class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      iconPosition: [0, 0],
    }
    this.drawSquare = this.drawSquare.bind(this)
    this.moveIcon = this.moveIcon.bind(this)
  }

  moveIcon(event, x, y) {
    this.setState((state) => {
      return {iconPosition: [x, y]}
    })
  }

  drawSquare(i, iconPosition) {
    const iconX = iconPosition[0]
    const iconY = iconPosition[1]
    const squareX = i % 8
    const squareY = Math.floor(i / 8)
    const dark = (squareX + squareY) % 2 === 1
    const hasIcon = iconX === squareX && iconY === squareY
    const piece = hasIcon ? <Icon /> : null

    return (
      <div
        key={i}
        style={{width: '12.5%', height: '12.5%'}}
        onClick={(event) => this.moveIcon(event, squareX, squareY)}
      >
        <Square dark={dark}>{piece}</Square>
      </div>
    )
  }

  render() {
    const iconPosition = this.state.iconPosition
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.drawSquare(i, iconPosition))
    }
    return (
      <div
        style={{
          width: '500px',
          height: '300px',
          backgroundImage: `url(${PuzzleGrid})`,
        }}
      ></div>
    )
  }
}
