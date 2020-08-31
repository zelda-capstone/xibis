import React from 'react'
import Board from './board'
import Icon from './icon'

export default function BlockPuzzle() {
  return (
    <div
      style={{
        margin: '15px',
        width: '75vw',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{width: '50%', height: '50%'}}>
        <Board />
      </div>
      <div style={{height: '50%'}}>
        <Icon />
      </div>
    </div>
  )
}
