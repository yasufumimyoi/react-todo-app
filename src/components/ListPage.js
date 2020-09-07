import React from "react";
import ListItem from "./ListItem";
import { db } from "../firebase/firebase";

const ListPage = ({ state, setState, uid }) => {
  const handleRemove = (itemRemove) => {
    const item = itemRemove.id;
    setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    db.ref(`users/${uid}/todos`).child(item).remove();
  };

  return (
    <div>
      {state.items.map((item, index) => (
        <ListItem
          key={index}
          {...item}
          handleRemove={() => handleRemove(item)}
        />
      ))}
    </div>
  );
};

export default ListPage;
