import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFCybXBG1g4lNEj1j80AmW9Lz5KMdsAzA',
  authDomain: 'disneyplus-clone-b8ba5.firebaseapp.com',
  projectId: 'disneyplus-clone-b8ba5',
  storageBucket: 'disneyplus-clone-b8ba5.appspot.com',
  messagingSenderId: '401122651071',
  appId: '1:401122651071:web:5fcde1d90932dc0370cf0a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
