import React from "react";
import moment from "moment";

class memo8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
  }
  onChangeTime = () => {
    this.setState(
      () => {
        time: moment().format("MMMM Do YYYY, h:mm:ss a");
      },
      () => {
        console.log(this.state.time);
      }
    );
  };
  render() {
    return (
      <div>
        <p>from Memo8</p>
        <p>{this.state.time}</p>
        <button onClick={this.onChangeTime}>Click</button>
      </div>
    );
  }
}

export default memo8;
