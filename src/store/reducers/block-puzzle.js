const TALLY_PIECES = 'TALLY_PIECES'

const tallyPieces = (num) => ({
  type: TALLY_PIECES,
  num,
})

export const addPiece = () => {
  return function (dispatch) {
    dispatch(tallyPieces(1))
  }
}

const initialState = 0

const piecesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TALLY_PIECES:
      return state + action.num
    default:
      return state
  }
}

export default piecesReducer
