import React from 'react'
import {PiecesArray} from './ImageAssets/index'
import SinglePiece from './singlePiece'

export default function AllPieces(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {PiecesArray.map((piece, index) => {
        return <SinglePiece key={index} piece={piece} effects={props.effects} />
      })}
    </div>
  )
}
