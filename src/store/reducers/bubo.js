import * as ACTIONS from '../../constants/actions'

const getBubos = (bubos) => {
  return {
    type: ACTIONS.GET_BUBOS,
    bubos,
  }
}

const addBubo = (bubo) => {
  return {
    type: ACTIONS.ADD_BUBO,
    bubo,
  }
}

const updateBubo = (bubo) => {
  return {
    type: ACTIONS.UPDATE_BUBO,
    bubo,
  }
}

const resetBubos = (bubos) => {
  return {
    type: ACTIONS.RESET_BUBOS,
    bubos,
  }
}

export const getBubosCollection = (bubosRef) => {
  return async function (dispatch) {
    try {
      const bubosCollection = await bubosRef.get()
      const bubos = bubosCollection.docs.map((doc) => doc.data())
      dispatch(getBubos(bubos))
    } catch (err) {
      console.error(err)
    }
  }
}

export const addBuboToDb = (bubo, bubosRef) => {
  return async function (dispatch) {
    try {
      await bubosRef.add(bubo)
      dispatch(addBubo(bubo))
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

export const resetBubosCollection = (bubosRef) => {
  return async function (dispatch) {
    try {
      const bubosCollection = await bubosRef.get()

      bubosCollection.docs.forEach((doc) => {
        doc.ref
          .delete()
          .then(() => {
            console.log('success!')
          })
          .catch((err) => {
            console.log('error removing: ', err)
          })
      })
      dispatch(resetBubos([]))
    } catch (err) {
      console.error(err)
    }
  }
}

const INITIAL_STATE = []

function bubosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_BUBOS: {
      return action.bubos
    }
    case ACTIONS.ADD_BUBO: {
      return [...state, action.bubo]
    }
    case ACTIONS.UPDATE_BUBO: {
      const newState = state.filter((bubo) => bubo.id !== action.bubo.id)
      return [...newState, action.bubo]
    }
    case ACTIONS.RESET_BUBOS: {
      return action.bubos
    }
    default:
      return state
  }
}

export default bubosReducer;
