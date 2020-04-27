import React from "react";
import ReactDom from "react-dom";

const Header = () => <h1>Welcome react</h1>

const App1 = (props) => {
  return (
    <div class>
      {/* */}
      <Header />
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

// Render is an method provided by react dom, usually only used once
ReactDom.render(<App1 />, document.getElementById("root"));
