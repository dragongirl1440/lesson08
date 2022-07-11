import firebase from "firebase/compat/app";
// import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/firestore';
// import {getFirestore} from 'firebase/firestore';
import 'firebase/compat/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyBmlyxbMwB_WplJvCL2J7WY07qdf0Xlrqg",
//   authDomain: "instadb-d246a.firebaseapp.com",
//   projectId: "instadb-d246a",
//   storageBucket: "instadb-d246a.appspot.com",
//   messagingSenderId: "889522246493",
//   appId: "1:889522246493:web:77a7086868b9c6d4b1ceb4"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
  authDomain: "instagram-clone-23884.firebaseapp.com",
  databaseURL: "https://instagram-clone-23884.firebaseio.com",
  projectId: "instagram-clone-23884",
  storageBucket: "instagram-clone-23884.appspot.com",
  messagingSenderId: "671034896143",
  appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
//   authDomain: "instagram-clone-23884.firebaseapp.com",
//   databaseURL: "https://instagram-clone-23884.firebaseio.com",
//   projectId: "instagram-clone-23884",
//   storageBucket: "instagram-clone-23884.appspot.com",
//   messagingSenderId: "671034896143",
//   appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };

export {auth, db, storage};
