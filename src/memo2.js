import React, { Component } from "react";

//Classコンポーネントのスコープ

// グローバルスコープ
// どこからでもアクセスする事が可能

const data1 = {
  city: "Hiroshima",
};
// console.log(data1);

// クラスコンポーネントのスコープ
// グローバルスコープにあるので、data1にアクセス可能
// stateを保持しているので、data2にアクセス可能

class App2 extends Component {
  constructor(props) {
    super(props);
    this.data2 = {
      city: "Osaka",
    };
    // console.log(data1);
    // console.log(this.data2.city);
  }

  // クラスコンポーネントのrender関数スコープ
  // グローバルスコープにあるので、data1にアクセス可能
  // クラスコンポーネント内にある関数なので、data2にアクセス可能
  // 自分のスコープ内なので、data3にもアクセス可能

  render() {
    const data3 = {
      city: "Tokyo",
    };
    console.log(data1);
    console.log(this.data2.city);
    console.log(data3.city);
    return (
      <div>
        <h2>Class Component</h2>
        <div>{data1.city}</div>
        <div>{this.data2.city}</div>
        <div>{data3.city}</div>
      </div>
    );
  }
}
