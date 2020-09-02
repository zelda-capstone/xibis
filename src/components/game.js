import React from 'react'
import {Route, BrowserRouter as Router } from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'recompose'
import {withFirebase} from '../firebase'
import * as ROUTES from '../constants/routes'

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
} from '../components'


class Game extends React.Component {
  constructor(props) {
    super(props)
    this.authUser = JSON.parse(localStorage.getItem('authUser'))
    //console.log('authUser in game constructor', this.authUser)
    if (this.authUser) {
      this.user = {
        username: this.authUser.username,
        userRef: this.props.firebase.user(this.authUser.uid),
        bubosRef: this.props.firebase.bubos(this.authUser.uid),
        puzzlesRef: this.props.firebase.puzzles(this.authUser.uid),
      }
      this.props.setUser(this.user)
    }
  }

  render() {
    const user = this.props.user;
    const bubos = this.props.bubos || []

    // if (user) {
      return (
        <Router>
            <Route exact path={ROUTES.LANDING} component={StartGame} />
            <Route component={NavBar} />
            <Route exact path={ROUTES.INTRO} component={Intro} />
            <Route
                  exact
                  path={ROUTES.ASSEMBLE_BUBOS}
                  render={() => <BuboSelector user={user} />}
                />
              <Route exact path={ROUTES.MAP} component={Map} />
              <Route exact path={ROUTES.WORMHOLE} component={Wormhole} />
              <Route
                exact path={ROUTES.REFLECTION}
                render={() => <LostAndFound user={this.props.user} />}
              />
              <Route exact path={ROUTES.BLOCK_PUZZLE} component={BlockPuzzle} />
            {
              bubos.length === 10 && (
                <Route component={Menu} />
              )
            }
        </Router>
      )
    }
  // }
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

export default compose(connect(mapState, mapDispatch), withFirebase)(Game)

