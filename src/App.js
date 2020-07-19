import React from "react";
import Memo8 from "./memo8";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h3>Todo App</h3>
    <NavLink to="/" activeClassName="selected" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="create" activeClassName="selected">
      Create List
    </NavLink>
  </header>
);

const HomePage = () => (
  <div>
    <p>Write down things to do</p>
  </div>
);

const CreatePage = () => (
  <div>
    <p>Put your tasks down the below</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <p>Not Found</p>
    <Link to="/">Go Home</Link>
  </div>
);

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
            <Route exact path="/" component={HomePage} />
            <Route path="/create" component={CreatePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Memo8 />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
