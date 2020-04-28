import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项",
      desc: "今日事今日毕",
      article: "<div>hello</div>",
      todos: [
        {
          id: 1,
          title: "吃饭",
          assignee: 'link',
          isCompleted: true,
        },
        {
          id: 2,
          title: "睡觉",
          assignee: 'link',
          isCompleted: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="abc">
       {
        <div dangerouslySetInnerHTML={{__html:this.state.article}} />
       }
        <TodoHeader desc={this.state.title} x={1} y={2}>
          {this.state.desc}
        </TodoHeader>
        <TodoInput btnText="Add" />
        <TodoList todos={this.state.todos} />
        <Like />
      </div>
    );
  }
}

export default App;
