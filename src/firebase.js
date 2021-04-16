import firebase from "firebase/app";
import 'firebase/database';    // for realtime database
import 'firebase/firestore';  

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlx3PxaU4q4BDdAoVzS7NGuNTqrLfc9Us",
  authDomain: "twitter-fedd-app.firebaseapp.com",
  projectId: "twitter-fedd-app",
  storageBucket: "twitter-fedd-app.appspot.com",
  messagingSenderId: "342799750635",
  appId: "1:342799750635:web:e2e07d4869a5eca1bcf5ae",
  measurementId: "G-9WZBJ5RKKC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



export default db;