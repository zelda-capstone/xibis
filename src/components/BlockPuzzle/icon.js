import React from 'react'
import Draggable from 'react-draggable'

export default function Icon() {
  return (
    <Draggable>
      <img
        alt="a green bubo"
        src="./blank-img.png"
        style={{
          width: '46px',
          height: '44px',
          background: 'url(./green-bubo-base.svg) 0 0',
        }}
      />
    </Draggable>
  )
}
