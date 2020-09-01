const GET_PUZZLES = 'GET_PUZZLES'
const RESET_PUZZLES = 'RESET_PUZZLES'

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
      await puzzlesRef.doc('block').set({
        name: 'block-puzzle',
        planet: 'Tetris',
        imageUrl: '',
        unlocked: false
      })
      await puzzlesRef.doc('reflection').set({
        name: 'reflection',
        planet: 'Aguilera',
        imageUrl: '',
        unlocked: false
      })
      await puzzlesRef.doc('wormhole').set({
        name: 'worhmhole',
        planet: 'Tropics',
        imageUrl: '',
        unlocked: true
      })
      const puzzles = await puzzlesRef.get()
      const updatedPuzzles = puzzles.docs.map(doc => doc.data())
      dispatch (resetPuzzles(updatedPuzzles))
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
    default:
      return state
  }
}

export default puzzlesReducer
