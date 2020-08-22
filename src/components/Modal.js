import React from "react";
import Modal from "react-modal";

const Modal = (props) => (
  <Modal isOpen={false}>
    <h2>Are you sure to delete ALL of tasks??</h2>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button>REMOVE ALL</button>
  </Modal>
);
