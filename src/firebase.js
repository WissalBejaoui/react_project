import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLk4aIgNqcc0iPmz7xR48AU3jM4BQefq4",
  authDomain: "clone-829ff.firebaseapp.com",
  projectId: "clone-829ff",
  storageBucket: "clone-829ff.appspot.com",
  messagingSenderId: "632190719891",
  appId: "1:632190719891:web:88fd3569ad3bf5632efa66"
};
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

export default firebase.auth();