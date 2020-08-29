import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import sessionReducer from './reducers/session'
import userReducer from './reducers/user'
import bubosReducer from './reducers/bubo'

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  bubos: bubosReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(rootReducer, middleware);

export default store
