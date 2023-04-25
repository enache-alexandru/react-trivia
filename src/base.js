// import * as firebase from "firebase/app";
// import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// });

// export default app;

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcjaFMchEqoqUZ3gO0fxWdaO1vfPLyfwI",
  authDomain: "react-trivia-60048.firebaseapp.com",
  projectId: "react-trivia-60048",
  storageBucket: "react-trivia-60048.appspot.com",
  messagingSenderId: "34322887233",
  appId: "1:34322887233:web:a31e1a5164a1bef9798cc0",
  databaseURL: "https://react-trivia-60048-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app