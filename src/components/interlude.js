import React from 'react'
import { connect } from 'react-redux'

class Interlude extends React.Component {
  // async componentDidMount() {
  //   const puzzleRef = this.props.user.puzzleRef;
  //   this.props.getPuzzles()
  //   this.interlude = doc.data().interlude;
  // }

  render() {
  return (
    <div className='story'>
      <div>
        {/* {this.interlude} */}
      </div>
    </div>
  )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Interlude)
