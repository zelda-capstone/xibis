import React from 'react'
import {PiecesArray} from './ImageAssets/index'
import SinglePiece from './singlePiece'
import {connect} from 'react-redux'

export class AllPieces extends React.Component {
  render() {
    const winCondition = this.props.totalCorrect === 12
    if (winCondition) {
      console.log('congratulations, you won!')
    }
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {PiecesArray.map((piece, index) => {
          return <SinglePiece key={index} piece={piece} />
        })}
      </div>
    )
  }
}

const mapState = (reduxState) => ({
  totalCorrect: reduxState.blockPuzzle,
})

export default connect(mapState)(AllPieces)
