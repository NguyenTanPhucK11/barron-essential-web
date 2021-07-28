import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyA8cnB5xkZWmo1IjE_yQS59Tx9MLoZv_FM",
  authDomain: "study-english-d42c6.firebaseapp.com",
  databaseURL: "https://study-english-d42c6.firebaseio.com",
  projectId: "study-english-d42c6",
  storageBucket: "study-english-d42c6.appspot.com",
  messagingSenderId: "1022474256018",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
