import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "../firebase/firebase";
import DashboardPage from "./Dashboard";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function AuthExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((use) => {
      if (use) {
        setIsAuthenticated(true);
      }
    });
  }, [isAuthenticated]);

  function AuthButton() {
    return isAuthenticated ? (
      <div>
        <DashboardPage />
      </div>
    ) : (
      <HandleLogin />
    );
  }

  function HandleLogin() {
    let login = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    };

    return (
      <div>
        <Typography>Please login to use Todo App</Typography>
        <Button variant="contained" color="primary" onClick={() => login()}>
          Log in with Google
        </Button>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <AuthButton />
      </div>
    </Router>
  );
}
