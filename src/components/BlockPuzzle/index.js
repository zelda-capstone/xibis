import React from 'react'
import Board from './board'
import Icon from './icon'
import Destination from './ImageAssets/pawel-czerwinski-F_dg3zc95Jc-unsplash.jpg'

export default function BlockPuzzle() {
  return (
    <div
      style={{
        margin: '1em',
        width: '95vw',
        height: '95vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <div>This is where I'll render a container of bubos!</div>
      <div>
        <Board />
        <Icon />
      </div>
      <div>
        <img
          alt="an image of your destination planet"
          src={Destination}
          style={{width: '25vw'}}
        />
      </div>
    </div>
  )
}
