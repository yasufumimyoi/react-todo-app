import React from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

class CreatePage extends React.Component {
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
      this.props.history.push("/dashboard");

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
    console.log(itemRemove);
    const item = itemRemove.uid;
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => {
        return itemRemove !== item;
      }),
    }));
    // db.ref(`todos/${itemRemove.uid}`).remove();
    db.ref("todos").child(item).remove();
    console.log(item);
  };

  handleAllRemove = () => {
    this.setState(() => ({ items: [] }));
    db.ref("todos").remove();
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
      this.setState({ items: data });

      //console.log("First", this.state.items);
    });
  };

  componentDidMount = () => {
    this.fetchData();
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
        <h3>Add your list and organize your day!</h3>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField name="title" label="Title" />
          <TextField name="description" label="Description" />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleAllRemove}
          >
            All Remove
          </Button>
        </form>
      </div>
    );
  }
}

export default CreatePage;

// <ol>
// {this.state.items.map((item) => {
//   const { id, title, description, createdAt } = item;
//   return (
//     <div key={id}>
//       <h4>{title}</h4>
//       <p>
//         {description} {createdAt}
//       </p>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => this.handleRemove(item)}
//       >
//         Remove
//       </Button>
//     </div>
//   );
// })}
// </ol>
