import React from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ModalPage } from "../components/ModalPage";
import "../css/createpage.css";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
});

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: "",
          title: "",
          description: "",
          createdAt: "",
          selected: "false",
        },
      ],
      date: moment(),
      focused: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: uuidv4(),
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      createdAt: moment().format("MMM Do YY"),
      date: moment(this.state.date).format("MMM Do YY"),
    };

    if (data.title || data.description) {
      const inputData = this.state.items.concat([data]);
      this.setState({ items: inputData });

      const { id, title, description, createdAt, date } = data;
      db.ref("todos").push({
        id,
        title,
        description,
        createdAt,
        date,
      });
      data = {
        title: (e.target.elements.title.value = ""),
        description: (e.target.elements.description.value = ""),
      };
      this.props.history.push("/dashboard");
    }
  };

  handleRemove = (itemRemove) => {
    console.log(itemRemove);
    const item = itemRemove.uid;
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    // db.ref(`todos/${itemRemove.uid}`).remove();
    db.ref("todos").child(item).remove();
    console.log(item);
  };

  handleAllRemove = () => {
    this.setState(() => ({ items: [] }));
    this.setState(() => ({ selected: false }));
    db.ref("todos").remove();
  };

  openModal = () => {
    this.setState(() => ({ selected: true }));
  };

  closeModal = () => {
    this.setState(() => ({ selected: false }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="form">
        <h2 className="title">
          Add task the thing to do and organize your day!
        </h2>
        <form
          className={classes.root}
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            margin="dense"
            name="title"
            label="Title"
            fullWidth
            autoFocus
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            fullWidth
          />
          <SingleDatePicker
            date={this.state.date}
            onDateChange={(date) => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.openModal}
            fullWidth
          >
            All Remove
          </Button>
        </form>
        <ModalPage
          selected={this.state.selected}
          handleAllRemove={this.handleAllRemove}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default withStyles(useStyles)(CreatePage);
