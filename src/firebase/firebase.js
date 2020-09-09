import firebase from "firebase/app"
import 'firebase/firestore'
import "firebase/auth"

// Your web firebase's Firebase configuration
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
    //to get rid of popup, is there a signin w redirect method?
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
