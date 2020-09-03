import React from 'react'
import { Link } from 'react-router-dom'
import { Howl } from 'howler'
import * as ROUTES from '../constants/routes'

class Intro extends React.Component {
  constructor() {
    super()
    this.music = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      volume: 0.5,
      loop: true,
      sprite: {
        'sad_bubos': [

        ]
      }
    });
    this.source = 0;
  }

  // componentDidMount() {
  //   this.source = this.music.play('sad_bubos')
  // }

  // componentWillUnmount() {
  //   this.music.fade(this.music.volume(), 0, 1500, this.source)
  // }

  render() {
    return (
      <>
        <div className='story'>
          <div className='typewriter'>
            A very dramatic intro narrative to our story and the purpose of the journey.
            Are you ready to begin?
          </div>
          <div className='buttons-container'>
            <Link to={ROUTES.ASSEMBLE_BUBOS} ><button className='button'>Yes</button></Link>
            <Link to={ROUTES.LANDING}><button className='button'>No</button></Link>
          </div>
        </div>
      </>
    )
  }
}

export default Intro
