import React from 'react'
import Square from './square'
import Icon from './icon'

export default class Board extends React.Component {
  drawSquare(x, y, [iconX, iconY]) {
    const dark = (x + y) % 2 === 1
    const hasIcon = iconX === x && iconY === y
    const piece = hasIcon ? <Icon /> : null

    return <Square dark={dark}>{piece}</Square>
  }

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Square light>
          <Icon />
        </Square>
      </div>
    )
  }
}
