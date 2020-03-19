import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhKyKxPGQCmBNY_Q-Ibvtg1ZniNg-sDNM",
    authDomain: "mono-db.firebaseapp.com",
    databaseURL: "https://mono-db.firebaseio.com",
    projectId: "mono-db",
    storageBucket: "mono-db.appspot.com",
    messagingSenderId: "189686640969",
    appId: "1:189686640969:web:733dada6e4a7d7264dea98",
    measurementId: "G-ELNR55GGVD"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;