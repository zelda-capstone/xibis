import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Howl } from 'howler'
import * as ROUTES from '../constants/routes'

class Intro extends React.Component {
  constructor() {
    super()
    this.music = 0;
  }

  componentDidMount() {
    this.music = this.props.sounds.play('sad_bubos')
  }

  componentWillUnmount() {
    this.props.sounds.fade(this.props.sounds.volume(), 0, 1000, this.music)
  }

  render() {
    return (
      <>
        <div className='story'>
          <div className='typewriter'>
            Here, our initial story will begin...are you ready to get started?
          </div>
          <div className='buttons-container'>
            <button><Link to={ROUTES.ASSEMBLE_BUBOS} className='button'>Yes</Link></button>
            <button><Link to='/' className='button'>No</Link></button>
          </div>
        </div>
      </>
    )
  }
}

export default Intro
