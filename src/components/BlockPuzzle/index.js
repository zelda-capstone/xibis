import React from 'react'
import Board from './board'

export default class BlockPuzzle extends React.Component {
  render() {
    return (
      <div style={{margin: '15px', width: '95vh', height: '95vh'}}>
        <div style={{width: '95%', height: '95%'}}>
          I'm just trying to render a basic puzzle here, so bear with me, Bubos.
          <Board iconPosition={[1, 0]} />
        </div>
      </div>
    )
  }
}
