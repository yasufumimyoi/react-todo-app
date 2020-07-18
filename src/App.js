import React from "react";
import Memo8 from "./memo8";

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
      <div>
        <Memo8 />
      </div>
    );
  }
}

export default App;
