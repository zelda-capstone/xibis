import React from 'react'
import Draggable from 'react-draggable'
import GreenBubo from './green-bubo-base.svg'

export default function Icon() {
  return (
    <Draggable>
      <img alt="a green bubo" src={GreenBubo} />
    </Draggable>
  )
}
