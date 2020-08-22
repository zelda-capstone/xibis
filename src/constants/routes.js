import React from 'react'
import { Route } from 'react-router-dom'
import { NavBar, StartGame, Intro, Map, TestPuzzle, Menu, Hint } from '../components'

const Routes = () => {
  return (
    <>
      <Route component={NavBar} />
      <Route exact path='/intro' component={Intro} />
      <Route exact path='/hint' component={Hint} />
      <Route exact path='/map' component={Map}/>
      <Route exact path='/play' component={StartGame}/>
      <Route exact path='/test-puzzle' component={TestPuzzle}/>
      <Route component={Menu} />
    </>
  )
}

export default Routes
