import React from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const customStyles = {
  content: {
    top: "35%",
    left: "50%",
    right: "50%",
    bottom: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalPage = (props) => {
  const classes = useStyles();
  return (
    <Modal
      style={customStyles}
      isOpen={props.selected}
      onRequestClose={props.closeModal}
    >
      <h2>Are you sure to delete ALL of tasks??</h2>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleAllRemove}
        >
          Yes
        </Button>
        <Button variant="contained" color="primary" onClick={props.closeModal}>
          No
        </Button>
      </div>
    </Modal>
  );
};

export default ModalPage;
