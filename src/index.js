import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import store from './store'
import Firebase, { FirebaseContext } from './firebase';

const firebase = new Firebase();
export default firebase;


ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={firebase}>
      <Router >
        <App />
      </Router>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root'),
);
