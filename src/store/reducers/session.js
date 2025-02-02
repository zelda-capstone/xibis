export const SET_AUTH_USER = 'SET_AUTH_USER'

const INITIAL_STATE = {
  authUser: null
}

const setAuthUser = (state, action) => {
  return {
    ...state, authUser: action.authUser
  }
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return setAuthUser(state, action)
    }
    default:
      return state
  }
}

export default sessionReducer;
