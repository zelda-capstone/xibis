const SET_BUBOS = 'SET_MESSAGES'

const INITIAL_STATE = {
  bubos: []
};

const setBubos = (state, action) => ({
  ...state,
  messages: action.bubos,
});

function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BUBOS: {
      return setBubos(state, action);
    }
    default:
      return state;
  }
}

export default messageReducer;
