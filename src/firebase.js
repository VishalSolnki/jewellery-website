import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUV0RNBc07Fw9dkDYY-JxWFHh8BMuVFoo",
  authDomain: "solankijewellers-5472e.firebaseapp.com",
  databaseURL: "https://solankijewellers-5472e-default-rtdb.firebaseio.com",
  projectId: "solankijewellers-5472e",
  storageBucket: "solankijewellers-5472e.appspot.com",
  messagingSenderId: "150238081397",
  appId: "1:150238081397:web:49ce6e11c30d544b68e33c",
  measurementId: "G-CNTZDLJDDT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };