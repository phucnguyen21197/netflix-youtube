import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBvBHn2y1DGpXisgjTLDHHYUtY_-yZDv24",
    authDomain: "netflix-clone-16f23.firebaseapp.com",
    projectId: "netflix-clone-16f23",
    storageBucket: "netflix-clone-16f23.appspot.com",
    messagingSenderId: "221259050381",
    appId: "1:221259050381:web:992ad61959f00202d621c4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;