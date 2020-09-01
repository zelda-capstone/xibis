import React from 'react'
import Draggable from 'react-draggable'
import {PiecesArray} from './ImageAssets/index'
import singlePiece from './singlePiece'
import SinglePiece from './singlePiece'

export default class Icon extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {PiecesArray.map((piece, index) => {
          const position = piece.location
          return <SinglePiece key={index} piece={piece} />
        })}
      </div>
    )
  }
}
