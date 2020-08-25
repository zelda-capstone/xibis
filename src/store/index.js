import { createStore, combineReducers } from 'redux';
import sessionReducer from './reducers/session'
import userReducer from './reducers/user'
import buboReducer from './reducers/bubo'


// Add Firebase to reducers
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  user: userReducer,
  bubos: buboReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

export default store
