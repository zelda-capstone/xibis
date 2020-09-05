import React from 'react'
import { Link, withRouter } from 'react-router-dom'
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
          <div className='typewriter'>
            A community of bubos are fleeing human space invaders and traveling through galaxies in search of a new planet to call home.
          </div>
          <div className='typewriter'>
            Only by knowing their strengths and working together will they succeed, but they can't do it alone... Solve a series of mini puzzles to help them find their way!
          </div>
          <div className='typewriter'>
            Are you ready to begin?
          </div>
          <div className='buttons-container'>
            <Link to={ROUTES.ASSEMBLE_BUBOS} ><button className='button'>yes</button></Link>
            <Link to={ROUTES.LANDING}><button className='button'>no</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Intro)
