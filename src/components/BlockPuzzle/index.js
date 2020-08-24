import React from 'react'
import Board from './board'

export default class BlockPuzzle extends React.Component {
  render() {
    return (
      <div className="puzzle-container">
        <div className="puzzle">
          I'm just trying to render a basic puzzle here, so bear with me, Bubos.
          <Board iconPosition={[0, 0]} />
        </div>
      </div>
    )
  }
}
