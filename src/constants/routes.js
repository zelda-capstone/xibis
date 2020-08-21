import React from 'react'
import { Route } from 'react-router-dom'
import { StartGame, Map, TestPuzzle } from '../components'

const Routes = () => {
  return (
    <>
      <Route exact path='/map' component={Map}/>
      <Route exact path='/play' component={StartGame}/>
      <Route exact path='/test-puzzle' component={TestPuzzle}/>
      {/* <Route component={Menu} /> */}
    </>
  )
}

export default Routes
