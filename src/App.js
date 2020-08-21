import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
// import Signup from './components/signup';
// import Login from './components/login';
import firebase, { auth, db, SignInScreen } from './firebase.js'
import Play from './components/play'



const App = () => {
  const [user, loading, error, uid] = useAuthState(firebase.auth());
  
    return (
      <>
      <Router>
      { !user
          ?<div id="firebaseui">
            <SignInScreen/>
          </div>
          :
        <Switch>
          <Route path="/play" render={(props) => (<Play {...props} user={user}/>)}></Route>
        </Switch>
      }
      </Router>
      </>
    );

}





// function PrivateRoute({ component: Component, authenticated, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authenticated === true
//         ? <Component {...props} />
//         : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
//     />
//   )
// }
export default App;
