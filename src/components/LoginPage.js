import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import firebase from "../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: 15,
    textAlign: "center",
  },
});

const LoginPage = ({ setIsAuthenticated, setUid }) => {
  const classes = useStyles();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setIsAuthenticated(true);
      }
    });
  }, [setIsAuthenticated]);

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Please login to use Todo App
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Google
      </Button>
    </div>
  );
};

export default LoginPage;
