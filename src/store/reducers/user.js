export const SET_USER = 'SET_USER'

const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

export const setUserOnState = userRef => {
  return async function (dispatch) {
    try {
      const user = await userRef.get()
      dispatch(setUser(user.data()))
    } catch (err) {
      console.error(err)
    }
  }
}

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
