import React from 'react'
import Board from './board'

export default function BlockPuzzle() {
  return (
    <div style={{margin: '15px', width: '95vh', height: '95vh'}}>
      <div style={{width: '95%', height: '95%'}}>
        <Board />
      </div>
    </div>
  )
}
