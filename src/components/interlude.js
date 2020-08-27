import React from 'react'
import { withFirebase } from '../firebase'

class Interlude extends React.Component {
  async componentDidMount() {
    // const puzzleRef = this.props.firebase.puzzles(this.props.name);
    // const doc = await puzzleRef.get()
    // this.interlude = doc.data().interlude;
  }

  render() {
  return (
    <div className='story'>
      <div>
      {/* <div className='typewriter'> */}
      On the planet Aguilera, things aren't always as they seem. The mirrored terrain casts uncertain glances over every shoulder. Will the reflections cast shadows of doubt, or will they show your bubos who they truly are inside...?
      </div>
    </div>
  )
  }
}

export default withFirebase(Interlude)
