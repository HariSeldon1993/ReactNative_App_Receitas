import firebase from "firebase";
// import "firebase";
// import { initializeApp } from 'firebase/app';
import "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
const Firebase = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(Firebase);
// const db = firebase.firestore();

//const auth = getAuth();

export default {
  Firebase,
  db,
};
