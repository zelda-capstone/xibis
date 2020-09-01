const TALLY_PIECES = 'TALLY_PIECES'

const tallyPieces = () => ({
  type: TALLY_PIECES,
})

export const addPiece = () => {
  return function (dispatch) {
    console.log('here is the thunk')
    dispatch(tallyPieces())
  }
}

const initialState = 0

const piecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TALLY_PIECES:
      return state + 1
    default:
      return state
  }
}

export default piecesReducer
