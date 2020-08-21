import firebase from "firebase/app"
import 'firebase/firestore'
import "firebase/auth"
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-lN9S6wyF7gRxwwVERLXx1-UpYiFJ0pg",
    authDomain: "zapstone-bc2fe.firebaseapp.com",
    databaseURL: "https://zapstone-bc2fe.firebaseio.com",
    projectId: "zapstone-bc2fe",
    storageBucket: "zapstone-bc2fe.appspot.com",
    messagingSenderId: "765053002099",
    appId: "1:765053002099:web:4730c184aab20cf345a506",
    measurementId: "G-5CW3SZ5PNW"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


// // This is our firebaseui configuration object
// const uiConfig = ({
//   signInFlow: 'popup',
//   signInSuccessUrl: '/play',
//   signInOptions: [
//     // List of OAuth providers supported.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//     // Other config options...
// });



export class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/play',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in/up:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          {/* <Play user={firebase.auth().currentUser}/> */}
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );
  }
}




export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase 