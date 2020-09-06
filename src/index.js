import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { db } from "./firebase/firebase";
import Modal from "react-modal";
import firebase from "./firebase/firebase";

import Header from "./components/Header";
import ListPage from "./components/ListPage";
import CreatePage from "./components/CreatePage";
import NotFoundPage from "./components/NotFoundPage";
import LoginPage from "./components/LoginPage";

Modal.setAppElement("#root");

const AppRouter = () => {
  const [state, setState] = useState({
    items: [
      {
        id: "",
        title: "",
        description: "",
        createdAt: "",
        date: "",
        focused: false,
      },
    ],
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalSelected, setIsModalSelected] = useState(false);
  const [uid, setUid] = useState(null);

  const fetchData = () => {
    db.ref(`users/${uid}/todos`).on("value", (snapshot) => {
      const data = [];

      snapshot.forEach((childrenSnapshot) => {
        data.push({
          id: childrenSnapshot.key,
          ...childrenSnapshot.val(),
        });
      });
      if (data.length > 0) {
        setState({ ...state, items: data });
      }
    });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      }
    });
  }, [setIsAuthenticated]);

  useEffect(() => {
    fetchData();
  }, []);

  const getUid = () => {
    const user = firebase.auth().currentUser;
    if (user != null) {
      const currentUid = user.uid;
      setUid(currentUid);
      console.log(currentUid);
    }
  };

  console.log(uid);

  return (
    <Router>
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return isAuthenticated ? (
                <Redirect to="/dashboard" />
              ) : (
                <LoginPage
                  setIsAuthenticated={setIsAuthenticated}
                  setUid={setUid}
                />
              );
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={() => <ListPage state={state} setState={setState} />}
          />
          <Route
            exact
            path="/create"
            render={() => (
              <CreatePage
                state={state}
                setState={setState}
                isModalSelected={isModalSelected}
                setIsModalSelected={setIsModalSelected}
                uid={uid}
              />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
