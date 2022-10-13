import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDgMezEZQHnnXf2okwC3RPznCKw3n-07CY",
    authDomain: "netflix-clone-17d91.firebaseapp.com",
    projectId: "netflix-clone-17d91",
    storageBucket: "netflix-clone-17d91.appspot.com",
    messagingSenderId: "812401939133",
    appId: "1:812401939133:web:300d68232e8d0d819dddd4"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
