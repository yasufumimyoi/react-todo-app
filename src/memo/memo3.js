import React from "react";

// Functionコンポーネントのスコープ
// グローバルとFunctionコンポーネント内の２種類しかない

const data1 = {
  city: "Hiroshima",
};

const App2 = () => {
  const data2 = {
    city: "Tokyo",
  };

  return (
    <div>
      <h2>Function component</h2>
      <div>{data1.city}</div>
      <div>{data2.city}</div>
    </div>
  );
};
