import React from "react";
import Memo6 from "./memo6";

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
        <Memo6 />
      </div>
    );
  }
}

export default App;
