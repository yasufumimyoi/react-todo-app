import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCAD_myhjRJtj5jp4uJ1nBlXAn31rhmQY4",
  authDomain: "fir-6f17f.firebaseapp.com",
  databaseURL: "https://fir-6f17f.firebaseio.com",
  projectId: "fir-6f17f",
  storageBucket: "fir-6f17f.appspot.com",
  messagingSenderId: "566328405687",
  appId: "1:566328405687:web:7d64f80419b68e94922732",
  measurementId: "G-VP72B3S8RX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();
