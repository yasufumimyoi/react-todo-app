import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebase from "./firebase/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Log in");
  } else {
    console.log("Log out");
  }
});
