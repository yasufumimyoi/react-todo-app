import React from "react";

//アロー関数の後は()で括る
//{}でやるとオブジェクトになるので、代入もしくは関数コールのエラーになる

export const Page1 = () => (
  <div>
    <p>This is from Page1</p>
  </div>
);

//{}を使う場合はreturnをつける必要がある
export const Page2 = () => {
  return <p>This is from Page2</p>;
};

//JSXだと中にコンソールを入れる事が可能
//分割代入
//stateの値の名前と違っても使える this.state.cityをaddressに変更して値をもらう

export const Page3 = ({ name, address }) => {
  console.log(name);
  console.log(address);
  return (
    <div>
      <p>This is from Page3</p>
    </div>
  );
};
