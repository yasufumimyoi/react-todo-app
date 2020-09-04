import React, { useState, useHistory } from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ModalPage from "../components/ModalPage";
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

const CreatePage = ({
  state,
  setState,
  isModalSelected,
  setIsModalSelected,
}) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let data = {
  //     id: uuidv4(),
  //     title: e.target.elements.title.value,
  //     description: e.target.elements.description.value,
  //     createdAt: moment().format("MMM Do YY"),
  //     date: moment(this.state.date).format("MMM Do YY"),
  //   };

  //   if (data.title || data.description) {
  //     const inputData = this.state.items.concat([data]);
  //     this.setState({ items: inputData });

  //     const { id, title, description, createdAt, date } = data;
  //     db.ref("todos").push({
  //       id,
  //       title,
  //       description,
  //       createdAt,
  //       date,
  //     });
  //     data = {
  //       title: (e.target.elements.title.value = ""),
  //       description: (e.target.elements.description.value = ""),
  //     };
  //     this.props.history.push("/dashboard");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.ref("todos").push({
      title: state.items[0].title,
    });
  };

  const updateFiled = (e) => {
    console.log(state.items);
    setState({
      items: [
        {
          ...state,
          [e.target.name]: e.target.value,
        },
      ],
    });
  };

  const handleAllRemove = () => {
    setState(() => ({ items: [] }));
    setIsModalSelected(false);
    db.ref("todos").remove();
  };

  const openModal = () => {
    setIsModalSelected(true);
  };

  const closeModal = () => {
    setIsModalSelected(false);
  };

  return (
    <div className="form">
      <h2 className="title">Add task the thing to do and organize your day!</h2>
      <form
        className={useStyles.root}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          margin="dense"
          name="title"
          label="Title"
          fullWidth
          autoFocus
          onChange={updateFiled}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          onChange={updateFiled}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={openModal}
          fullWidth
        >
          All Remove
        </Button>
      </form>
      <ModalPage
        selected={isModalSelected}
        handleAllRemove={handleAllRemove}
        closeModal={closeModal}
      />
    </div>
  );
};

export default withStyles(useStyles)(CreatePage);

// <SingleDatePicker
// date={this.state.date}
// onDateChange={(date) => this.setState({ date })}
// focused={this.state.focused}
// onFocusChange={({ focused }) => this.setState({ focused })}
// numberOfMonths={1}
// isOutsideRange={() => false}
// />
