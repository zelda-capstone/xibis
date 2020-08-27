import React from 'react'
import Board from './board'
import Icon from './icon'

export default function BlockPuzzle() {
  return (
    <div
      style={{
        margin: '15px',
        width: '95vh',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{width: '95%', height: '95%'}}>
        <Board />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '25%',
          height: '95%',
        }}
      >
        <Icon />
      </div>
    </div>
  )
}
