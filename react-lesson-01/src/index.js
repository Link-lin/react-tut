import React from "react";
import ReactDom from "react-dom";

const App1 = (props) => {
  return (
    <div>
      {/* */}
      <h1>Welcome react {props.title}</h1>
      <p>Hello</p>
    </div>
  );
};

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>hello world</h1>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

const app = new App({
    title: "sssssss"
}).render();

ReactDom.render(app, document.getElementById("root"));
