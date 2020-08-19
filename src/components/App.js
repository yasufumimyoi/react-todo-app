import React from "react";
import Form from "./FormPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { DashboardPage } from "./Dashboard";
import { CreatePage } from "./CreatePage";
import { NotFoundPage } from "./NotFoundPage";
import { LoginPage } from "./LoginPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Max",
      city: "Tokyo",
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/create" component={CreatePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Form />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
