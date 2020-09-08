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
  NotFound,
  GameWin,
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
      vol: 0.0,
      loop: true,
      sprite: {
        bubos_atmosphere: [0, 122932.24489795919],
        bubos_170bpm: [130000, 67422.04081632652],
        sad_bubos: [201000, 70661.22448979593],
        bubos_theme: [273000, 88685.71428571432],
        bubos_tropics: [363000, 32052.24489795921],
        bubos_doodle: [405000, 60055.51020408166],
      },
    })
    this.effects = new Howl({
      src: ['sounds/sounds.webm', 'sounds/sounds.mp3'],
      vol: 1.0,
      sprite: {
        LF_correct: [124000, 2063.6734693877515],
        LF_incorrect: [128000, 2063.6734693877656],
        win_sound: [397000, 4519.183673469399],
        wormhole_FX: [403000, 204.17233560090153],
      },
    })
  }

  render() {
    const user = this.props.user
    const bubos = this.props.bubos || []

    if (user) {
      return (
        <>
          <Route component={NavBar} />
          {bubos.length === 10 && <Route component={Menu} />}
          <Switch>
            <Route
              exact
              path={ROUTES.LANDING}
              render={() => <StartGame sounds={this.sounds} />}
            />
            <Route
              exact
              path={ROUTES.INTRO}
              render={() => <Intro sounds={this.sounds} />}
            />
            <Route
              exact
              path={ROUTES.ASSEMBLE_BUBOS}
              render={() => <BuboSelector sounds={this.sounds} />}
            />
            <Route
              exact
              path={ROUTES.MAP}
              render={() => <Map sounds={this.sounds} />}
            />
            <Route
              exact
              path={ROUTES.WORMHOLE}
              render={() => (
                <Wormhole sounds={this.sounds} effects={this.effects} />
              )}
            />
            <Route
              exact
              path={ROUTES.REFLECTION}
              render={() => (
                <LostAndFound sounds={this.sounds} effects={this.effects} />
              )}
            />
            <Route
              exact
              path={ROUTES.BLOCK_PUZZLE}
              render={() => (
                <BlockPuzzle sounds={this.sounds} effects={this.effects} />
              )}
            />
            <Route exact path={ROUTES.WIN} component={GameWin} />
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
    bubos: state.bubos,
  }
}

const mapDispatch = (dispatch) => {
  return {
    setUser: (user) => dispatch({type: 'SET_USER', user}),
  }
}

export default compose(
  withFirebase,
  withAuthentication,
  connect(mapState, mapDispatch)
)(Game)
