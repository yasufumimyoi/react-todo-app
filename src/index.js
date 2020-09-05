import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db } from "./firebase/firebase";
import Modal from "react-modal";

import Header from "./components/Header";
import ListPage from "./components/ListPage";
import CreatePage from "./components/CreatePage";
import NotFoundPage from "./components/NotFoundPage";
import Auth from "./components/Auth";

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

  const fetchData = () => {
    db.ref("todos").on("value", (snapshot) => {
      const data = [];

      snapshot.forEach((childrenSnapshot) => {
        data.push({
          uid: childrenSnapshot.key,
          ...childrenSnapshot.val(),
        });
      });
      if (data.length > 0) {
        setState({ ...state, items: data });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            render={() => (
              <Auth
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                state={state}
                setState={setState}
              />
            )}
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
