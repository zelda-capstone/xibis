import React from 'react'
import Draggable from 'react-draggable'
import Piece01 from './puzzle-piece-01.svg'

export default function Icon() {
  return (
    <Draggable>
      <div
        style={{
          backgroundImage: `url(${Piece01})`,
          height: '200px',
          width: '300px',
        }}
      ></div>
    </Draggable>
  )
}
