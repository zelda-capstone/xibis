import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { resetBubosCollection } from '../store/reducers/bubo'

class StartGame extends React.Component {
  startGame = async () => {
    const bubosRef = this.props.user.bubosRef;
    if (bubosRef) {
      this.props.resetBubos(bubosRef)
    } else {
      //create a bubo collection
      //this.props.createBuboCollection(userRef)
    }
  }

  render() {
    return (
      <>
        <div id='start-container'>
          <Link to='/intro' onClick={this.startGame} >
            <div>start new journey</div>
          </Link>
          <Link to='/'>
            <div>load game</div>
          </Link>
        </div>
      </>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    resetBubos: (bubosRef) => dispatch(resetBubosCollection(bubosRef))
  }
}

export default connect(mapState, mapDispatch)(StartGame);
