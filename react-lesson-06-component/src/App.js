import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项",
      desc: "今日事今日毕",
    };
  }

  render() {
    return (
      <div className="abc">
        <TodoHeader desc={this.state.title} x={1} y={2}>
        {this.state.desc}
        </TodoHeader>
        <TodoInput btnText="Add" />
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
