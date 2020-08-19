import React from "react";
import firebase from "../firebase/firebase";

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const LoginPage = () => (
  <div>
    <button onClick={login}>Login</button>
  </div>
);
