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

export const getPuzzlesCollection = puzzlesRef => {
  return async function (dispatch) {
    try {
      const puzzlesCollection = await puzzlesRef.get()
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
      const puzzlesCollection = await puzzlesRef.get()
      const updatedPuzzles = puzzlesCollection.docs.map(doc =>  doc.update({ unlocked: false }))
      //update the puzzles collection to "lock" all puzzles
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
    default:
      return state
  }
}

export default puzzlesReducer
