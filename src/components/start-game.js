import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const StartGame = (props) => {
  //console.log('start game props: ', props)

  return (
    <>
      <div id='start-container'>
        <Link to='/intro'>
          <div>start new journey</div>
        </Link>
        <Link to='/'>
          <div>load game</div>
        </Link>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(StartGame);
