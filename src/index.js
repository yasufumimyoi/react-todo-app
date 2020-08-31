import React, { useS } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Modal from "react-modal";

import Header from "./components/Header";
import DashboardPage from "./components/Dashboard";
import CreatePage from "./components/CreatePage";
import NotFoundPage from "./components/NotFoundPage";
import AuthExample from "./components/Example";

Modal.setAppElement("#root");

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={AuthExample} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/create" component={CreatePage} />
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
