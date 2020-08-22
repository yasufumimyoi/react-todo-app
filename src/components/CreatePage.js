import React from "react";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { db } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../css/createpage.css";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(0),
    },
  },
});

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
    this.props.history.push("/dashboard");
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

  render() {
    const { classes } = this.props;
    return (
      <div className="form">
        <h2 className="title">
          Add task the thing to do and organize your day!
        </h2>
        <form
          className={classes.root}
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField margin="dense" name="title" label="Title" />
          <TextField margin="dense" name="description" label="Description" />
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

export default withStyles(useStyles)(CreatePage);

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
