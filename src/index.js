import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import firebase from "./firebase/firebase";
import { useHistory, useLocation } from "react-router-dom";

const jsx = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let hasRender = false;
const renderApp = () => {
  if (!hasRender) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRender = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    renderApp();
  } else {
    console.log("Log out");
    ReactDOM.render(jsx, document.getElementById("root"));
  }
});
