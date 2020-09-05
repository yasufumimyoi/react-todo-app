import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { db } from "../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ModalPage from "../components/ModalPage";
import "../css/createpage.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const CreatePage = ({
  state,
  setState,
  isModalSelected,
  setIsModalSelected,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(moment);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatDate = date.format("MMM Do YY");

    if (title.length > 0 || description.length > 0) {
      setState({ ...state, items: [{ title, description, formatDate }] });
      db.ref("todos").push({
        title,
        description,
        formatDate,
      });
      setTitle("");
      setDescription("");
      history.push("/");
    }
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
        className={classes.root}
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SingleDatePicker
          date={date}
          onDateChange={(date) => setDate(date)}
          focused={focused}
          onFocusChange={() => setFocused(true)}
          onClose={() => setFocused(false)}
          numberOfMonths={1}
          isOutsideRange={() => false}
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

export default CreatePage;
