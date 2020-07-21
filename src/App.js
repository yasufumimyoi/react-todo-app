import React from "react";
import Memo9 from "./memo9";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h2>Todo App</h2>
    <NavLink to="/" activeClassName="selected" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="selected">
      Create List
    </NavLink>
  </header>
);

const HomePage = () => (
  <div>
    <h3>Is there any things to do in your mind?</h3>
  </div>
);

const CreatePage = () => (
  <div>
    <p>Hello Guest!!!</p>
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
          <Memo9 />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
