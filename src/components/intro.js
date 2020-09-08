import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import * as ROUTES from '../constants/routes'

class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.music = 0
  }

  componentDidMount() {
    this.music = this.props.location.state.music
    this.props.sounds.fade(0, this.props.sounds.volume(), 800, this.music)
  }

  componentWillUnmount() {
    this.props.sounds.fade(this.props.sounds.volume(), 0, 800, this.music)
  }

  render() {
    return (
      <div>
        <div className='intro-container'>
        <Typewriter className='typewriter' options={{ delay: 50 }} onInit={(typewriter) => {
            typewriter
            .typeString('Here, our journey will begin...\n')
            .pauseFor(1000)
            .deleteAll()
            .typeString('A community of Xibis are fleeing human space invaders and traveling through galaxies in search of a new planet to call home.\n')
            .pauseFor(2000)
            .typeString(`Only by knowing their strengths and working together will they succeed, but they can't do it alone... Solve a series of mini puzzles to help them find their way!\n`)
            .pauseFor(2000)
            .typeString('Are you ready?')
            .start()
          }}
          />
          <div className='buttons-container intro-buttons'>
            <Link to={ROUTES.ASSEMBLE_BUBOS} ><button className='button'>yes</button></Link>
            <Link to={ROUTES.LANDING}><button className='button'>no</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Intro)
