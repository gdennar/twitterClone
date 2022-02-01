// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAKJTuKzUIEtXDJ2hc2sRLNAYX-CH_6ouA",
    authDomain: "twitter-clone-5a7a7.firebaseapp.com",
    projectId: "twitter-clone-5a7a7",
    storageBucket: "twitter-clone-5a7a7.appspot.com",
    messagingSenderId: "50280770012",
    appId: "1:50280770012:web:20d78f878497a7b020c719",
    measurementId: "G-TRDPS0FX16"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
