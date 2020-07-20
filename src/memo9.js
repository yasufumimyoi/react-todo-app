import React from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

class memo9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: "1",
          title: "Book a restaurant for a party",
          description: "With classmates",
          createdAt: moment().format("MMM Do YY"),
        },
        {
          id: "2",
          title: "Checking a hostel in Okinawa",
          description: "ASAP!! Otherwise might end up sleeping on the beach",
          createdAt: moment().add(10, "days").format("MMM Do YY"),
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
    };

    if (data) {
      const newData = this.state.items.concat([data]);
      this.setState({ items: newData });
      data = {
        title: (e.target.elements.title.value = ""),
        description: (e.target.elements.description.value = ""),
      };
      console.log(this.state.items);
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
              </div>
            );
          })}
        </ol>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Title" name="title" />
          <input type="text" placeholder="Description" name="description" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default memo9;
