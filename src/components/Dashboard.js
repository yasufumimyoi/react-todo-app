import React from "react";
import { ListPage } from "./ListPage";
import { db } from "../firebase/firebase";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: "",
          title: "",
          description: "",
          createdAt: "",
        },
      ],
    };
  }

  handleRemove = (itemRemove) => {
    const item = itemRemove.uid;
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    db.ref("todos").child(item).remove();
  };

  fetchData = () => {
    db.ref("todos").once("value", (snapshot) => {
      const data = [];

      snapshot.forEach((childrenSnapshot) => {
        data.push({
          uid: childrenSnapshot.key,
          ...childrenSnapshot.val(),
        });
      });
      if (data.length > 0) {
        this.setState({ items: data });
      }
    });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <ListPage
            key={item.id}
            {...item}
            handleRemove={() => this.handleRemove(item)}
          />
        ))}
      </div>
    );
  }
}
