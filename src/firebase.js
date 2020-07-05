import * as firebase from "firebase";

var firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
