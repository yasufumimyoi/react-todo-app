import React from "react";
import { ListPage } from "./ListPage";
import moment from "moment";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";

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
  handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      id: uuidv4(),
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      createdAt: moment().format("MMM Do YY"),
    };

    if (data.title || data.description) {
      const inputData = this.state.items.concat([data]);
      this.setState({ items: inputData });

      const { id, title, description, createdAt } = data;
      db.ref("todos").push({
        id,
        title,
        description,
        createdAt,
      });
      data = {
        title: (e.target.elements.title.value = ""),
        description: (e.target.elements.description.value = ""),
      };
    }
  };

  handleRemove = (itemRemove) => {
    console.log(itemRemove);
    const item = itemRemove.uid;
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    db.ref("todos").child(item).remove();
  };

  handleAllRemove = () => {
    this.setState(() => ({ items: [] }));
    db.ref("todos").remove();
  };

  fetchData = () => {
    db.ref("todos").on("value", (snapshot) => {
      const data = [];

      snapshot.forEach((childrenSnapshot) => {
        data.push({
          uid: childrenSnapshot.key,
          ...childrenSnapshot.val(),
        });
      });
      this.setState({ items: data });
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
