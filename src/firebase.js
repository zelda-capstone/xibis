import firebase from "firebase/app"
import 'firebase/firestore'


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
firebase.analytics();


export default firebase 