import React from 'react'
import { Route } from 'react-router-dom'
import { StartGame, Map, TestPuzzle, Menu, Hint } from '../components'

const Routes = () => {
  return (
    <>
      <Route exact path='/hint' component={Hint} />
      <Route exact path='/map' component={Map}/>
      <Route exact path='/play' component={StartGame}/>
      <Route exact path='/test-puzzle' component={TestPuzzle}/>
      <Route component={Menu} />
    </>
  )
}

export default Routes
