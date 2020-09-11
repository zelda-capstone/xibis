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
    this.effects = new Howl({
      src: ['audio/effects/effects.webm', 'audio/effects/effects.mp3'],
      vol: 1.0,
      sprite: {
        'LF_correct': [  0,
          2063.673469387755],
        'LF_incorrect': [ 4000,
          2063.673469387755],
        'win_sound': [ 8000,
          4519.183673469389],
        'wormhole_FX': [ 14000,
          204.17233560090688],
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
            <Route exact path={ROUTES.LANDING} component={StartGame} />
            <Route path={ROUTES.INTRO} component={Intro} />
            <Route
              exact
              path={ROUTES.ASSEMBLE_BUBOS}
              render={() => <BuboSelector />}
            />
            <Route
              exact
              path={ROUTES.MAP}
              render={() => <Map />}
            />
            <Route
              exact
              path={ROUTES.WORMHOLE}
              render={() => (
                <Wormhole effects={this.effects} />
              )}
            />
            <Route
              exact
              path={ROUTES.REFLECTION}
              render={() => (
                <LostAndFound effects={this.effects} />
              )}
            />
            <Route
              exact
              path={ROUTES.BLOCK_PUZZLE}
              render={() => (
                <BlockPuzzle effects={this.effects} />
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
