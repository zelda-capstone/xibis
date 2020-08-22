import React from 'react'

const Hint = (props) => {
  //const puzzle = this.props.firebase.puzzle(puzzleId);
  //query hint from DB for whatever puzzle is currently selected
  //render puzzle.hint below

  return (
    <div className='hint-container'>
      <div className='hint'>A hint for the user based on the current puzzle. We should render this as a popup instead of its own page.</div>
    </div>
  )
}

export default Hint
