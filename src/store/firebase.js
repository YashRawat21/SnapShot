import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyANjeW48KHKvDrNO-bQ_xHwgVcwmkItzWw",
    authDomain: "snapshot-9bc7a.firebaseapp.com",
    projectId: "snapshot-9bc7a",
    storageBucket: "snapshot-9bc7a.appspot.com",
    messagingSenderId: "309734158758",
    appId: "1:309734158758:web:bca4452cae9f95a83bdf67"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage =  firebase.storage();
  const provider  = new firebase.auth.GoogleAuthProvider();

  export {db,auth, storage,provider}