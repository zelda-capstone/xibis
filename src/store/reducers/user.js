export const SET_USER = 'SET_USER'

const INITIAL_STATE = {}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER: {
      return action.user
    }
    default:
      return state;
  }
}

export default userReducer;
