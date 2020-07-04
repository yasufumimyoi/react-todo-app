import React from "react";

const memo7 = (props) => {
  return (
    <div>
      <li key={props.index}>{props.item}</li>
      <button
        onClick={(e) => {
          props.handleRemove(props.item);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default memo7;
