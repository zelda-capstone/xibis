export const SET_USER = 'SET_USER'

const setUser = (state, action) => {
  return action.user
}

const INITIAL_STATE = {}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER: {
      return setUser(state, action)
    }
    default:
      return state;
  }
}

export default userReducer;
