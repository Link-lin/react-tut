//
import React, { Component, createContext } from "react";
import ReactDOM from "react-dom";

console.log(createContext());

// createContext 这个方法的结果是一个对象,里面有provider和consumer
// Provider 用于提供状态
// Consumer 用于接收状态
const { Provider, Consumer: CounterConsumer } = createContext();

class CounterProvider extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <Provider
        value={{
          count: this.state.count,
          onIncreaseCount: this.increaseCount,
          onDecreseCount: this.decreaseCount,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

class CountBtn extends Component {
  render() {
    return (
      <CounterConsumer>
      {
        ({onIncreaseCount,onDecreseCount}) => {
          const handler = this.props.type === 'increment' ? onIncreaseCount: onDecreseCount
          return <button onClick={handler}>{this.props.children} </button>
        }
      } 
      </CounterConsumer>
      )
    }
}

class Counter extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ count }) => {
          return <span> {count}</span>;
        }}
      </CounterConsumer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <CountBtn type="decrement">-</CountBtn>
        <Counter />
        <CountBtn type="increment">+</CountBtn>
      </div>
    );
  }
}

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("root")
);
