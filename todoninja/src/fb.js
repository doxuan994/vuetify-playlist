import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAlmgzAhAIhs-0yUxACuUeXG-GEeHMs0jE",
  authDomain: "todo-ninja-a0917.firebaseapp.com",
  databaseURL: "https://todo-ninja-a0917.firebaseio.com",
  projectId: "todo-ninja-a0917",
  storageBucket: "todo-ninja-a0917.appspot.com",
  messagingSenderId: "719003169176",
  appId: "1:719003169176:web:c2e3a4285308eaf3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
