import React, { Component } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components/index";
import { getTodos } from "./services/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项",
      desc: "今日事今日毕",
      article: "<div>hello</div>",
      todos: [],
      isLoading: false,
    };
  }

  getData = () => {
    this.setState({
      isLoading: true,
    });
    getTodos()
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          this.setState({
            todos: resp.data,
          });
        } else {
          //处理错误
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.getData()
  }

  onCompletedChange = (id) => {
    console.log(id);
    this.setState((prevState) => {
      return {
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    });
  };

  addTodo = (todoTitle) => {
    //   console.log(todoTitle)
    //   this.setState({
    //       todos: this.state.todos.concat({
    //           id: Math.random(),
    //           title: todoTitle,
    //           completed: false
    //       })
    //   })
    const newTodos = this.state.todos.slice();
    newTodos.push({
      id: newTodos.length + 1,
      title: todoTitle,
      completed: false,
    });
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="abc">
        {<div dangerouslySetInnerHTML={{ __html: this.state.article }} />}
        <TodoHeader desc={this.state.title} x={1} y={2}>
          {this.state.desc}
        </TodoHeader>
        <TodoInput btnText="Add" addTodo={this.addTodo} />
        {this.state.isLoading ? (
          "<div>loading</div>"
        ) : (
          <TodoList
            todos={this.state.todos}
            onCompletedChange={this.onCompletedChange}
          />
        )}
        <Like />
      </div>
    );
  }
}

export default App;
