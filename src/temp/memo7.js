import React from "react";
import Button from "@material-ui/core/Button";

const memo7 = ({ index, description, handleRemove }) => {
  return (
    <div>
      <li key={index}>{description}</li>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          handleRemove(handleRemove);
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default memo7;
