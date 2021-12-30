import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMjBk0T2kV5lKJfMpj6KJwUHS1oVvZNsY",
    authDomain: "fireblog-cb062.firebaseapp.com",
    projectId: "fireblog-cb062",
    storageBucket: "fireblog-cb062.appspot.com",
    messagingSenderId: "265026214816",
    appId: "1:265026214816:web:f9ea5382d581aa9514a2c5"
};  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();