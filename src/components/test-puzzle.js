import React from 'react'
import { Bubo } from '../components'

class TestPuzzle extends React.Component {
  constructor() {
    super();
    this.state = {
      waiting: [],
      raft: [],
      crossed: []
    }
  }

  onDragStart = (evt) => {

  }

  onDragOver = (evt) => {
    evt.preventDefault();
  }

  render() {
  return (
    <>
      <div className='puzzle-container'>
        <div className='puzzle'>The bubos need to cross a river. There is one small boat that holds two bubos at a time. Get all the bubos across safely--and take care with your pairings...</div>
        <div className='bubos-puzzle-container'>
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
        <div className='raft'></div>
      </div>
    </>
  )
  }
}

//eventually this will map the bubos from state onto here instead of listing individual components

export default TestPuzzle
