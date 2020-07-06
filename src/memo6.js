import React from "react";
import Memo7 from "./memo7";
import { db } from "./firebase";

class memo6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  handleSubmit = (e) => {
    //ページをリフレッシュするのを防ぐ
    e.preventDefault();

    const item = e.target.elements.items.value;

    if (item) {
      this.setState(
        {
          items: this.state.items.concat(item),
        },
        () => {
          db.ref("todos").update({
            items: this.state.items,
          });
        }
      );
      e.target.elements.items.value = "";
    }
  };

  handleRemove = (itemRemove) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
  };

  handleAllRemove = () => {
    this.setState(() => ({ items: [] }));
    db.ref("todos").remove();
  };

  //todoがコレクションの名前
  //itemsがオブジェクトのキーの名前

  // async componentDidMount() {
  //   await db.ref("todos").set({
  //     items: [
  //       "Clean the room",
  //       "Study React",
  //       "Prepare for the dinner",
  //       "Hangout!",
  //     ],
  //   });
  // }

  async componentDidMount() {
    try {
      let getDataFromDB = await (await db.ref("todos").once("value")).val();
      let { items } = getDataFromDB;
      this.setState({ items: this.state.items.concat(items) });
    } catch {
      console.log("No task in the database");
    }
  }

  componentDidUpdate() {
    db.ref("todos").update({
      items: this.state.items,
    });
    console.log(this.state.items);
  }

  //<ol></ol>で囲んで、mapメソットで表示させる
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        {this.state.items.length > 0 ? (
          <p>Here are your tasks!!</p>
        ) : (
          <p>Put down tasks right now!!</p>
        )}
        <ol>
          {this.state.items.map((item, index) => {
            return (
              <Memo7 item={item} key={index} handleRemove={this.handleRemove} />
            );
          })}
        </ol>
        <button onClick={this.handleAllRemove}>All Remove</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="items" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default memo6;
