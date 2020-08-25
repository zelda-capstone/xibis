const SET_USER = 'SET_USER'
const SET_USERS = 'SET_USERS'

const setUsers = (state, action) => ({
  ...state,
  users: action.users,
});

const setUser = (state, action) => ({
  ...state,
  users: {
    ...state.users,
    [action.uid]: action.user,
  },
});

const INITIAL_STATE = {
  users: null,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USERS: {
      return setUsers(state, action);
    }
    case SET_USER: {
      return setUser(state, action);
    }
    default:
      return state;
  }
}

export default userReducer;
