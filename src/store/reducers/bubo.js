const SET_BUBOS = 'SET_BUBOS'

const INITIAL_STATE = []


function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BUBOS: {
      return action.bubos;
    }
    default:
      return state;
  }
}

export default messageReducer;
