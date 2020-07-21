import React from "react";
import moment from "moment";
import { db } from "./firebase";
import { v4 as uuidv4 } from "uuid";

class memo9 extends React.Component {
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
      console.log("After", this.state.items);
    }

    //pushで行う場合
    //間接参照しているからpushでも変更できているのか？
    // const { items } = this.state;
    // items.push(data);
    // this.setState({ items: items });

    //concatで行う場合
    // const newData = this.state.items.concat([data]);
    // this.setState({ items: newData });

    //spreadで行う場合
    // const { items } = this.state;
    // const newData = [...items, data];
    // this.setState({ items: newData });
  };

  handleRemove = (itemRemove) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    console.log(this.state.items);
  };

  handleAllRemove = () => {
    this.setState(() => ({ items: [] }));
    db.ref("todos").remove();
  };

  componentDidMount = () => {
    db.ref("todos").once("value", (snapshot) => {
      const data = [];

      snapshot.forEach((childrenSnapshot) => {
        data.push({
          // id: childrenSnapshot.key,
          ...childrenSnapshot.val(),
        });
      });
      this.setState({ items: data });
      console.log("First", this.state.items);
    });
  };

  // async componentDidMount() {
  //   await db.ref("todos").push({
  //     id: uuidv4(),
  //     title: "Sleep as much as I want",
  //     description: "Before going to Okinawa",
  //     createdAt: moment().add(15, "days").format("MMM Do YY"),
  //   });
  // }

  render() {
    return (
      <div>
        <ol>
          {this.state.items.map((item) => {
            const { id, title, description, createdAt } = item;
            return (
              <div key={id}>
                <h4>{title}</h4>
                <p>
                  {description} {createdAt}
                </p>
                <button onClick={(e) => this.handleRemove(item)}>Remove</button>
              </div>
            );
          })}
        </ol>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" />
          <input type="text" placeholder="Description" name="description" />
          <button>Submit</button>
          <button onClick={this.handleAllRemove}>All Remove</button>
        </form>
      </div>
    );
  }
}

export default memo9;
