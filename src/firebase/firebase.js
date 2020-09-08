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
    this.auth.signInWithPopup(this.googleProvider).then(authUser => {
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


export default Firebase
