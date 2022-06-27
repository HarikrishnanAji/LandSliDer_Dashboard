import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAfnawcSk6YIiMlUy1845fF6WK-3XzJZo0",
    authDomain: "chatapp-626d4.firebaseapp.com",
    databaseURL: "https://chatapp-626d4-default-rtdb.firebaseio.com",
    projectId: "chatapp-626d4",
    storageBucket: "chatapp-626d4.appspot.com",
    messagingSenderId: "502269737713",
    appId: "1:502269737713:web:3a66be15ced060d6e60750",
    measurementId: "G-Y2K5BEXJ00"
  };
firebase.initializeApp(config);
export default firebase;