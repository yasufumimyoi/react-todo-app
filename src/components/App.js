import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import DashboardPage from "./Dashboard";
import CreatePage from "./CreatePage";
import { NotFoundPage } from "./NotFoundPage";
import { LoginPage } from "./LoginPage";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/create" component={CreatePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
