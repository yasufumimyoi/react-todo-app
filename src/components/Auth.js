import React, { useEffect } from "react";
import firebase from "../firebase/firebase";
import DashboardPage from "./Dashboard";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Auth = ({ isAuthenticated, setIsAuthenticated }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((use) => {
      if (use) {
        setIsAuthenticated(true);
      }
    });
  }, [isAuthenticated]);

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div>
      {isAuthenticated ? (
        <DashboardPage />
      ) : (
        <div>
          <Typography>Please login to use Todo App</Typography>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Log in with Google
          </Button>
        </div>
      )}
    </div>
  );
};

export default Auth;
