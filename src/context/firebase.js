var firebase = require("firebase");

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-cc39f.firebaseapp.com",
  databaseURL: "https://clone-cc39f.firebaseio.com",
  projectId: "clone-cc39f",
  storageBucket: "clone-cc39f.appspot.com",
  messagingSenderId: "937608999342",
  appId: "1:937608999342:web:0ace37c3b541fd6c50583f",
});
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
