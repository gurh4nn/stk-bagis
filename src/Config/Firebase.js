import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import "firebase/database";

const config = {
    apiKey: "AIzaSyApzahRLOlKJmomPtTnF8xdufMkbnupdkE",
    authDomain: "bagis-83800.firebaseapp.com",
    databaseURL: "https://bagis-83800-default-rtdb.firebaseio.com",
    projectId: "bagis-83800",
    storageBucket: "bagis-83800.appspot.com",
    messagingSenderId: "511556316677",
    appId: "1:511556316677:web:7c1de99afddace4d48b66c"
  };
  firebase.initializeApp(config);
  // firebase.firestore();
  export default firebase;