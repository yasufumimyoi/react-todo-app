import React from "react";
import ListPage from "./ListPage";
import { db } from "../firebase/firebase";

const Dashboard = ({ state, setState }) => {
  const handleRemove = (itemRemove) => {
    const item = itemRemove.uid;
    setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    db.ref("todos").child(item).remove();
  };

  return <div>{state.items[0].title}</div>;
};

export default Dashboard;

// {state.items.map((item) => (
//   <ListPage
//     key={item.id}
//     {...item}
//     handleRemove={() => handleRemove(item)}
//   />
// ))}
