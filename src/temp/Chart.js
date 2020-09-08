import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "",
          uv: 0,
          pv: 0,
          amt: 0,
        },
      ],
      //   data: [
      //     {
      //       name: "Page A",
      //       uv: 4000,
      //       pv: 2400,
      //       amt: 2400,
      //     },
      //     {
      //       name: "Page B",
      //       uv: 3000,
      //       pv: 1398,
      //       amt: 2210,
      //     },
      //     {
      //       name: "Page C",
      //       uv: 2000,
      //       pv: 9800,
      //       amt: 2290,
      //     },
      //     {
      //       name: "Page D",
      //       uv: 2780,
      //       pv: 3908,
      //       amt: 2000,
      //     },
      //     {
      //       name: "Page E",
      //       uv: 1890,
      //       pv: 4800,
      //       amt: 2181,
      //     },
      //     {
      //       name: "Page F",
      //       uv: 2390,
      //       pv: 3800,
      //       amt: 2500,
      //     },
      //     {
      //       name: "Page G",
      //       uv: 3490,
      //       pv: 4300,
      //       amt: 2100,
      //     },
      //   ],
    };
  }

  //   handleAddData = () => {
  //     this.setState(() => {
  //       return {
  //         data: [
  //           ...this.state.data,
  //           { name: "Test", uv: 3490, pv: 4300, amt: 2100 },
  //         ],
  //       };
  //     });
  //   };

  //   handleChange = (e) => {
  //     const name = e.target.name;
  //     this.setState({ data: [{ [name]: e.target.value }] });
  //     console.log(this.state.data);
  //   };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => {
      return {
        data: [
          ...this.state.data,
          { name: "Test", uv: 3490, pv: 4300, amt: 2100 },
        ],
      };
    });
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.data.name} />
          <input type="text" name="uv" value={this.state.data.uv} />
          <input type="text" name="pv" value={this.state.data.pv} />
          <input type="text" name="amt" value={this.state.data.amt} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Chart;
