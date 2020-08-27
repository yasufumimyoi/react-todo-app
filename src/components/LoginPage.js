import React from "react";
import firebase from "../firebase/firebase";
import Button from "@material-ui/core/Button";
import Example1 from "../memo/memo10";

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const LoginPage = () => (
  <div>
    <h3>User Login</h3>
    <Button onClick={login} variant="contained" color="primary" type="submit">
      Login with Google
    </Button>
    <Example1 />
  </div>
);
