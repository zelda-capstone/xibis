import firebase from "firebase/app"
import 'firebase/firestore'
import "firebase/auth"

// Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: 'zapstone-bc2fe',
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };


// Initialize Firebase
class Firebase {
  constructor(){
    firebase.initializeApp(firebaseConfig);


    /* Helper */

    this.fieldValue = firebase.firestore.FieldValue;
    this.emailAuthProvider = firebase.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = firebase.auth();
    this.db = firebase.firestore();
    /* Social Sign In Method Provider */

    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }


  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);


  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);


  doSignInWithGoogle = () =>
    this.auth.signInWithRedirect(this.googleProvider).then(authUser => {
      if (authUser.additionalUserInfo.isNewUser) {
        this.user(authUser.user.uid).set({
          username: authUser.user.displayName,
          email: authUser.user.email,
          level: ""
        });
      }
    });


  doSignOut = () => this.auth.signOut();

  onAuthUserListener = (next, fallback) =>
  this.auth.onAuthStateChanged(authUser => {
    if (authUser) {
      this.user(authUser.uid)
        .get()
        .then(snapshot => {
          const dbUser = snapshot.data();
          // // default empty roles
          // if (!dbUser.roles) {
          //   dbUser.roles = {};
          // }

          // merge auth and db user
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
            providerData: authUser.providerData,
            ...dbUser,
          };

          next(authUser);
        });
    } else {
      fallback();
    }
  });



// *** User API ***

user = uid => this.db.collection('users').doc(uid);

users = () => this.db.collection('users');

puzzles = uid => this.db.collection('users').doc(uid).collection('puzzles');

bubos = uid => this.db.collection('users').doc(uid).collection('bubos');

}
// firebase.initializeApp(firebaseConfig);
// //firebase.analytics();


// // // This is our firebaseui configuration object
// // const uiConfig = ({
// //   signInFlow: 'popup',
// //   signInSuccessUrl: '/play',
// //   signInOptions: [
// //     // List of OAuth providers supported.
// //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// //     firebase.auth.EmailAuthProvider.PROVIDER_ID
// //   ],
// //     // Other config options...
// // });



// export class SignInScreen extends React.Component {

//   // The component's Local state.
//   state = {
//     isSignedIn: false // Local signed-in state.
//   };

//   // Configure FirebaseUI.
//   uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'redirect',
//     signInSuccessUrl: '/play',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       // Avoid redirects after sign-in.
//       signInSuccessWithAuthResult: () => false
//     }
//   };

//   // Listen to the Firebase Auth state and set the local state.
//   componentDidMount() {
//     this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
//         (user) => this.setState({isSignedIn: !!user})
//     );
//   }

//   // Make sure we un-register Firebase observers when the component unmounts.
//   componentWillUnmount() {
//     this.unregisterAuthObserver();
//   }

//   render() {
//     if (!this.state.isSignedIn) {
//       return (
//         <div>
//           <h1>My App</h1>
//           <p>Please sign-in/up:</p>
//           <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <h1>My App</h1>
//         <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
//           {/* <Play user={firebase.auth().currentUser}/> */}
//         <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
//       </div>
//     );
//   }
// }

export default Firebase
