import React from 'react';
// import {
//   Route,
//   BrowserRouter as Router,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import Signup from './components/signup';
// import Login from './components/login';
import { SignInScreen } from './firebase.js'
import Routes from './constants/routes'
//import StartGame from './components/start-game'
//import Intro from './components/intro'



const App = () => {
    return (
      <>
        <div id="firebaseui">
          <SignInScreen/>
          <Routes />
        </div>
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
