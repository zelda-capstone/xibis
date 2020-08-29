const ADD_BUBO = 'ADD_BUBO'
const GET_BUBOS = 'GET_BUBOS'
const UPDATE_BUBO = 'UPDATE_BUBO'
const RESET_BUBOS = 'RESET_BUBOS'

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

const resetBubos = bubos => {
  return {
    type: RESET_BUBOS,
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

export const getBubosCollection = bubosRef => {
  return async function (dispatch) {
    try {
      const bubosCollection = await bubosRef.get()
      const bubos = bubosCollection.docs.map(doc => doc.data())
      dispatch(getBubos(bubos))
    } catch(err) {
      console.error(err)
    }
  }
}

export const resetBubosCollection = bubosRef => {
  return async function (dispatch) {
    try {
      const bubosCollection = await bubosRef.get();

      bubosCollection.docs.forEach(doc => {
        doc.ref.delete().then(() => {
          console.log('success!')
        }).catch(err => {
          console.log('error removing: ', err)
        })
      })
      dispatch(resetBubos([]))
    } catch (err) {
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

function bubosReducer(state = INITIAL_STATE, action) {
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

export default bubosReducer;
