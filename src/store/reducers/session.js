export const SET_AUTH_USER = 'SET_AUTH_USER'

const INITIAL_STATE = {
  authUser: null
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return action.authUser
    }
    default:
      return state
  }
}

export default sessionReducer;
