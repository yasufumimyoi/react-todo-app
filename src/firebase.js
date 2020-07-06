import * as firebase from "firebase";

var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
