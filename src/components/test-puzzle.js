import React from 'react'
import { Bubo, Twinkle } from '../components'

const TestPuzzle = (props) => {
  return (
    <>
       <Twinkle />
      <div className='puzzle-container'>
        <div className='puzzle'>The bubos need to cross a river. There is one small boat that holds two bubos at a time. Get all the bubos across safely--and take care with your pairings...</div>
      <div className='bubos-container'>
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
        <Bubo />
      </div>
      </div>
    </>
  )
}

export default TestPuzzle
