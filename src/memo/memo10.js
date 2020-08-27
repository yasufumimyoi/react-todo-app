import React, { useState, useEffect } from "react";

//class componentと同様にfunctional componentでもstateを持つ事が可能
//functional componentでstateと同じ機能を持たせる為なので、classではhooksは書く事が出来ない
const Example1 = () => {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleGreeting = () => {
    setGreeting((prevState) => prevState + "Hello");
  };

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{greeting}</p>
      <button onClick={handleGreeting}>Greeting!</button>
    </div>
  );
};

//NGパターン①
//functional componentのスコープ外で使用する
//const [greeting, setGreeting] = useState("Hello");

//NGパターン②
//条件分岐やループ内で使用する
// if (count == 10) {
//   const [greeting, setGreeting] = useState("Hello");
// }

export default Example1;
