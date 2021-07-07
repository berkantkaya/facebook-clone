import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcV7XQcVMexN4ISynK7flEX03xpO4gf88",
    authDomain: "facebook-clone-71a92.firebaseapp.com",
    projectId: "facebook-clone-71a92",
    storageBucket: "facebook-clone-71a92.appspot.com",
    messagingSenderId: "531800353933",
    appId: "1:531800353933:web:4d9ad00bc5dcc20271c6c4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} 
  export default db