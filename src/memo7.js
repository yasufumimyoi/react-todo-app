import React from "react";
import Button from "@material-ui/core/Button";

const memo7 = (props) => {
  return (
    <div>
      <li key={props.index}>{props.item}</li>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          props.handleRemove(props.item);
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default memo7;
