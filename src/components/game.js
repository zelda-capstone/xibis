import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import {withFirebase} from '../firebase'
import {withAuthentication} from '../components/Auth'
import * as ROUTES from '../constants/routes'
import {Howl} from 'howler'

import {
  NavBar,
  StartGame,
  Intro,
  BuboSelector,
  Map,
  LostAndFound,
  Menu,
  Wormhole,
  BlockPuzzle,
  NotFound
} from '../components'


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.authUser = JSON.parse(localStorage.getItem('authUser'))
    if (this.authUser) {
      this.user = {
        username: this.authUser.username,
        userRef: this.props.firebase.user(this.authUser.uid),
        bubosRef: this.props.firebase.bubos(this.authUser.uid),
        puzzlesRef: this.props.firebase.puzzles(this.authUser.uid),
      }
      this.props.setUser(this.user)
    }
    this.sounds = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      vol: 0.4,
      loop: true,
      sprite: {
        'sad_bubos': [199000,
          70661.22448979593],
        'bubos_170bpm': [
          130000,
          67422.04081632652
        ],
        'bubos_atmosphere': [ 0,
          122932.24489795919],
        'LF_correct': [124000,
          2000],
        'LF_incorrect': [127000,
          2000]
      }
    })
  }


  render() {
    const user = this.props.user;
    const bubos = this.props.bubos || []

    if (user) {
      return (
        <>
          <Route component={NavBar} />
          {
            bubos.length === 10 && (
              <Route component={Menu} />
            )
          }
          <Switch>
            <Route exact path={ROUTES.LANDING} component={StartGame} />
            <Route
              exact path={ROUTES.INTRO}
              render={() => <Intro sounds={this.sounds} />} />
            <Route
              exact path={ROUTES.ASSEMBLE_BUBOS}
              render={() => <BuboSelector user={user} sounds={this.sounds} />}
            />
            <Route exact path={ROUTES.MAP} component={Map} />
            <Route exact path={ROUTES.WORMHOLE} component={Wormhole} />
            <Route
              exact path={ROUTES.REFLECTION}
              render={() => <LostAndFound sounds={this.sounds} />}
            />
            <Route exact path={ROUTES.BLOCK_PUZZLE} component={BlockPuzzle} />
            <Route path={ROUTES.NOT_FOUND} component={NotFound} />
          </Switch>
        </>
      )
    }
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    bubos: state.bubos
  }
}

const mapDispatch = (dispatch) => {
  return {
    setUser: user => dispatch({ type: 'SET_USER', user }),
  }
}

export default compose(
  withFirebase,
  withAuthentication,
  connect(mapState, mapDispatch))(Game)

