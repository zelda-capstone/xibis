import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import sessionReducer from './reducers/session'
import userReducer from './reducers/user'
import buboReducer from './reducers/bubo'

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  bubos: buboReducer
});


const store = createStore(rootReducer, applyMiddleware(createLogger(
  { collapsed: true })));

export default store
