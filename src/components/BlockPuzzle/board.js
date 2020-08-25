import React from 'react'
import Square from './square'
import Icon from './icon'

export default class Board extends React.Component {
  constructor() {
    super()
    this.drawSquare = this.drawSquare.bind(this)
  }

  drawSquare(i, [iconX, iconY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const dark = (x + y) % 2 === 1
    const hasIcon = iconX === x && iconY === y
    const piece = hasIcon ? <Icon /> : null

    return (
      <div key={i} style={{width: '12.5%', height: '12.5%'}}>
        <Square dark={dark}>{piece}</Square>
      </div>
    )
  }

  render() {
    const iconPosition = this.props.iconPosition
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(this.drawSquare(i, iconPosition))
    }
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    )
  }
}
