import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  console.log(useState(10));
  const [count, setCount] = useState(0);

  useEffect(() =>{
    console.log('更新了');
    // eslint-disable-next-line no-template-curly-in-string
    document.title = `当前的数量为${count}`;
  })
  return (
    <div>
      <p>当前的数量为{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
