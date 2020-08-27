const ADD_BUBO = 'ADD_BUBO'
const GET_BUBOS = 'GET_BUBOS'
const UPDATE_BUBO = 'UPDATE_BUBO'

const addBubo = bubo => {
  return {
    type: ADD_BUBO,
    bubo
  }
}

const getBubos = bubos => {
  return {
    type: GET_BUBOS,
    bubos
  }
}

const updateBubo = bubo => {
  return {
    type: UPDATE_BUBO,
    bubo
  }
}

export const addBuboToDb = (bubo, bubosRef) => {
  return async function (dispatch) {
    try {
      await bubosRef.add(bubo)
      dispatch(addBubo(bubo))
    } catch(err) {
      console.error(err)
    }
  }
}

export const getBubosCollection = (bubosRef) => {
  return async function (dispatch) {
    try {
      console.log("in bubos thunk", bubosRef)
      const bubosCollection = await bubosRef.get()
      console.log("Getting bubos", bubosCollection)
      dispatch(getBubos(bubosCollection.data()))
    } catch(err) {
      console.error(err)
    }
  }
}

export const updateBuboInDb = (bubo, buboRef) => {
  return async function (dispatch) {
    try {
      const buboRes = await buboRef.update(bubo)
      dispatch(updateBubo(buboRes.data()))
    } catch (err) {
      console.error(err)
    }
  }
}


const INITIAL_STATE = []

function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BUBO: {
      return [...state, action.bubo]
    }
    case GET_BUBOS: {
      return action.bubos
    }
    case UPDATE_BUBO: {
      const newState = state.filter(bubo => bubo.id !== action.bubo.id)
      return [...newState, action.bubo]
    }
    default:
      return state;
  }
}

export default messageReducer;
