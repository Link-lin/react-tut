import React, { Component } from "react";

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }
  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {this.state.isLiked ? "取消💓" : "喜欢🖤"}
        </span>
      </div>
    );
  }

  handleLikedClick = () =>{
      
    //   this.setState({
    //     isLiked : !this.state.isLiked
    //   })
    this.setState((prevState, props)=>{
        console.log('setstate内部的' , this.state)
        return {
            isLiked : !prevState.isLiked
        }
    }, ()=>{
        // Set state 是异步处理,如果想要获取最新的state，
        console.log('setstate外部的', this.state)
    })
  }
}
