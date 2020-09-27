import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import * as ROUTES from '../constants/routes'

class Intro extends React.Component {
  componentDidMount() {
    this.props.theme.fade(0, this.props.theme.volume(), 500)
  }

  componentWillUnmount() {
    this.props.theme.fade(this.props.theme.volume(), 0, 1000)
    this.props.theme.stop();
  }

  render() {
    return (
      <div>
        <div className='intro-container'>
        <div className='typewriter'>
          A community of Xibis are fleeing human space invaders and traveling through galaxies in search of a new planet to call home.
        </div>
        <div className='typewriter'>
          Only by knowing their strengths and working together will they succeed, but they can't do it alone... Solve a series of mini puzzles to help them find their way!
        </div>
        <Typewriter className='typewriter' onInit={(typewriter) => {
            typewriter
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
