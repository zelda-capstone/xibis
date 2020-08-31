import React from 'react'
import { CustomizableBubo } from '../components'

class TestPuzzle extends React.Component {
  constructor() {
    super();
    this.state = {
      waiting: [],
      raft: [],
      crossed: []
    }
  }
  //eventually this will map the array bubos from state below instead of listing individual Bubo components

  render() {
  return (
    <>
      <div className='puzzle-container'>
        <div className='puzzle'>The bubos need to cross a river. There is one small boat that holds two bubos at a time. Get all the bubos across safely--and take care with your pairings...</div>
        <div className='bubos-puzzle-container'>
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
          <CustomizableBubo />
        </div>
        <div className='raft'></div>
      </div>
    </>
  )
  }
}

export default TestPuzzle
