// React 通过 ref 来获取组件或者dom 元素，
import React, { Component, createRef } from "react";

export default class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
    this.inputBox = createRef();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInput}
          onKeyUp={this.handleKeyUp}
          ref={this.inputBox}
        />
        <button onClick={this.handleAddClick}> {this.props.btnText} </button>
      </div>
    );
  }

  handleInput = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      inputValue: e.currentTarget.value,
    });
  };

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddClick();
    }
  };

  handleAddClick = (e) => {
    if (this.state.inputValue === "") {
      return;
    }
    this.props.addTodo(this.state.inputValue);
    this.setState(
      {
        inputValue: "",
      },
      () => {
        this.inputBox.current.focus();
      }
    );
  };
}
