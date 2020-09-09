import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import moment from "moment";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: "",
          time: 0,
        },
      ],
      date: "",
      time: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.date || !this.state.time) return;
    if (this.state.data[0].time === 0) {
      this.setState(() => {
        return { data: [{ date: this.state.date, time: this.state.time }] };
      });
      this.setState({ date: "" });
      this.setState({ time: "" });
    } else {
      this.setState(() => {
        return {
          data: [
            ...this.state.data,
            {
              date: this.state.date,
              time: this.state.time,
            },
          ],
        };
      });
      this.setState({ date: "" });
      this.setState({ time: "" });
    }
  };

  render() {
    return (
      <div>
        <BarChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="time" fill="#8884d8" />
        </BarChart>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Chart;
