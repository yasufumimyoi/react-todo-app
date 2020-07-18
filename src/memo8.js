import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

class memo8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.title.value);
    console.log(e.target.elements.description.value);
    console.log(e.target.elements.note.value);
    e.target.elements.title.value = "";
    e.target.elements.description.value = "";
    e.target.elements.note.value = "";
  };

  render() {
    return (
      <div>
        <h3>Todo App</h3>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Title" name="title" />
          <input type="text" placeholder="Description" name="description" />
          <textarea placeholder="note" name="note" />
          <SingleDatePicker
            date={this.state.date}
            onDateChange={(date) => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default memo8;
