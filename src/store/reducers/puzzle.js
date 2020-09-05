const GET_PUZZLES = 'GET_PUZZLES'
const RESET_PUZZLES = 'RESET_PUZZLES'
//const UNLOCK_PUZZLE = 'UNLOCK_PUZZLE'

const getPuzzles = puzzles => {
  return {
    type: GET_PUZZLES,
    puzzles
  }
}

const resetPuzzles = puzzles => {
  return {
    type: RESET_PUZZLES,
    puzzles
  }
}

// const unlockPuzzle = puzzle => {
//   return {
//     type: UNLOCK_PUZZLE,
//     puzzle
//   }
// }

export const getUnlockedPuzzles = puzzlesRef => {
  return async function (dispatch) {
    try {
      const puzzlesCollection = await puzzlesRef.where('unlocked', '==', true).get()
      const puzzles = puzzlesCollection.docs.map(doc => doc.data())
      dispatch(getPuzzles(puzzles))
    } catch (err) {
      console.error(err)
    }
  }
}

export const resetPuzzlesCollection = puzzlesRef => {
  return async function (dispatch) {
    try {
      await puzzlesRef.doc('reflection').set({
        name: 'Reflection',
        planet: 'Aguilera',
        imageUrl: 'https://i.ibb.co/nCJK34p/planet.png',
        unlocked: true,
        order: 1
      })
      await puzzlesRef.doc('block-puzzle').set({
        name: 'Block-Puzzle',
        planet: 'Tessera',
        imageUrl: 'https://i.ibb.co/BVkX4dn/tessera.png',
        unlocked: false,
        order: 2
      })
      await puzzlesRef.doc('wormhole').set({
        name: 'Wormhole',
        planet: 'Tropics',
        imageUrl: 'https://i.ibb.co/nCJK34p/planet.png',
        unlocked: false,
        order: 3
      })
      const puzzles = await puzzlesRef.get()
      const updatedPuzzles = puzzles.docs.map(doc => doc.data())
      dispatch(resetPuzzles(updatedPuzzles))
    } catch (err) {
      console.error(err)
    }
  }
}

export const unlockPuzzleInDb = (puzzlesRef, puzzleId) => {
  return async function (dispatch) {
    try {
      const lockedPuzzleRef = await puzzlesRef.doc(puzzleId)
      await lockedPuzzleRef.update({ unlocked: true })
      // don't dispatch anything? next time you visit map and call getPuzzles, the update will be applied
    } catch (err) {
      console.error(err)
    }
  }
}

const INITIAL_STATE = []

const puzzlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PUZZLES:
      return action.puzzles
    case RESET_PUZZLES:
      return action.puzzles
    // case UNLOCK_PUZZLE:
    //   const filter = state.filter(puzzle => puzzle.id === action.puzzle.id)
    //   return [...filter, action.puzzle]
    default:
      return state
  }
}

export default puzzlesReducer
