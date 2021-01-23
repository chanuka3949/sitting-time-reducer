import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyANLJtKYJjMUQrGSaClrd6FrVWhmZwMAqM",
    authDomain: "sitting-time-reducer.firebaseapp.com",
    databaseURL: "https://sitting-time-reducer.firebaseio.com",
    projectId: "sitting-time-reducer",
    storageBucket: "sitting-time-reducer.appspot.com",
    messagingSenderId: "705123173064",
    appId: "1:705123173064:web:8b179f50d5f843cdb75bfd"
  };
  firebase.initializeApp(config);
  
  export const db = firebase.database();