import React from 'react'
import Draggable from 'react-draggable'
import Piece01 from './puzzle-piece-01.svg'

export default function Icon() {
  return (
    <Draggable>
      <span
        style={{
          backgroundImage: `url(${Piece01})`,
          backgroundSize: 'cover',
          width: '3000px',
          height: '2000px',
        }}
      ></span>
    </Draggable>
  )
}
