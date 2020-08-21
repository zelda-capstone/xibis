import React from 'react'
import { Route } from 'react-router-dom'
import StartGame from '../components/start-game'
import TestPuzzle from '../components/test-puzzle'
import Menu from '../components/menu'

const Routes = () => {
  return (
    <>
      <Route exact path='/play' component={StartGame}/>
      <Route exact path='/test-puzzle' component={TestPuzzle}/>
      <Route component={Menu} />
    </>
  )
}

export default Routes
