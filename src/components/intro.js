import React from 'react'
import {Link} from 'react-router-dom'
import {Howl} from 'howler'
import * as ROUTES from '../constants/routes'

class Intro extends React.Component {
  constructor() {
    super()
    this.music = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      volume: 0.5,
      loop: true,
      sprite: {
        sad_bubos: [],
      },
    })
    this.source = 0
  }

  // componentDidMount() {
  //   this.source = this.music.play('sad_bubos')
  // }

  // componentWillUnmount() {
  //   this.music.fade(this.music.volume(), 0, 1500, this.source)
  // }

  render() {
    return (
      <div>
        <div className="intro-container">
          <div className="typewriter">
            a community of Xibis are fleeing human space invaders and traveling
            through galaxies in search of a new planet to call home.
          </div>
          <div className="typewriter">
            only by knowing their strengths and working together will they
            succeed, but they can't do it alone... solve a series of mini
            puzzles to help them find their way!
          </div>
          <div className="typewriter">are you ready to begin?</div>
          <div className="buttons-container">
            <Link to={ROUTES.ASSEMBLE_BUBOS}>
              <button className="button">yes</button>
            </Link>
            <Link to={ROUTES.LANDING}>
              <button className="button">no</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro
