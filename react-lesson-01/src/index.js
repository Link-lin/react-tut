import React from "react";
import ReactDom from "react-dom";

const App = (props) => {
  return (
    <div>
      {/* */}
      <h1>Welcome react {props.title}</h1>
      <p>Hello</p>
    </div>
  );
};


ReactDom.render(<App title="1984"/>, document.getElementById("root"));
