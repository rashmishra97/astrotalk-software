import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBz6XrsekD7WPMASCOvFl369BvFvwEbGDQ",
    authDomain: "ebuddy-hmhxcw.firebaseapp.com",
    databaseURL: "https://ebuddy-hmhxcw.firebaseio.com",
    projectId: "ebuddy-hmhxcw",
    storageBucket: "ebuddy-hmhxcw.appspot.com",
    messagingSenderId: "690429496247",
    appId: "1:690429496247:web:55b006b60a88470946f632"
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {auth , googleAuthProvider};

