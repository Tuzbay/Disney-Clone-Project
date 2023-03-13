import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzUmqIkwDy1RzarGshhIzflTX78Py-BHs",
  authDomain: "disneyplus-clone-b4271.firebaseapp.com",
  projectId: "disneyplus-clone-b4271",
  storageBucket: "disneyplus-clone-b4271.appspot.com",
  messagingSenderId: "112811671796",
  appId: "1:112811671796:web:9311e32e42ce8d96231ea1",
  measurementId: "G-RBPRR59WRV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
