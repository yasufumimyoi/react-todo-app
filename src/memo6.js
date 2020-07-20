import React from "react";
import Memo7 from "./memo7";
import { db } from "./firebase";
import Button from "@material-ui/core/Button";

class memo6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          createdAt: "",
          description: "",
        },
      ],
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
  //   await db.ref("todos").push({
  //     description: "Hanging out with friends",
  //     createdAt: "Wednesday",
  //   });
  // }

  // async componentDidMount() {
  //   try {
  //     let getDataFromDB = await (await db.ref("todos").once("value")).val();
  //     let { items } = getDataFromDB;
  //     this.setState({ items: this.state.items.concat(items) });
  //   } catch {
  //     console.log("No task in the database");
  //   }
  // }

  // componentDidMount = () => {
  //   db.ref("todos").on("value", (snapshot) => {
  //     const data = [];

  //     snapshot.forEach((childSnapshot) => {
  //       data.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val(),
  //       });
  //     });
  //     console.log(data);
  //   });
  // };

  componentDidMount = () => {
    db.ref("todos").on("value", (snapshot) => {
      snapshot.forEach((children) => {
        const data = children.val();
        this.setState({ items: data });
        console.log(this.state.items);
      });
    });
  };

  // componentDidUpdate() {
  //   db.ref("todos").update({
  //     items: this.state.items,
  //   });
  //   console.log(this.state.items);
  // }

  //<ol></ol>で囲んで、mapメソットで表示させる
  render() {
    return (
      <div>
        <p>{this.state.items.description}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAllRemove}
        >
          All Remove
        </Button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="items" />
          <button variant="contained" color="primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default memo6;

const temp = () => (
  <div>
    {this.state.items.length > 0 ? (
      <p>Here are your tasks!!</p>
    ) : (
      <p>Put down tasks right now!!</p>
    )}
    <ol>
      {this.state.items.map((description, index) => {
        return (
          <Memo7
            description={description}
            key={index}
            handleRemove={this.handleRemove}
          />
        );
      })}
    </ol>
  </div>
);
