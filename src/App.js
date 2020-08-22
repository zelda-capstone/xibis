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
//import StartGame from './components/start-game'
//import Intro from './components/intro'



const App = () => {
    //if (user) console.log(user);

    return (
      <>
        <div id="firebaseui">
          <SignInScreen/>
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
