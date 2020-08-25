import React from 'react'
import { withFirebase } from '../../firebase'

class Interlude extends React.Component {
  async componentDidMount() {
    const puzzleRef = this.props.firebase.puzzle(this.props.name);
    const doc = await puzzleRef.get()
    this.interlude = doc.data().interlude;
  }

  render() {
  return (
      <div className='typewriter'>
        {this.interlude}
    </div>
  )
  }
}

export default withFirebase(Interlude)
