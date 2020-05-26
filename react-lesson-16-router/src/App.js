import React, { Component } from "react";
import {Route, NavLink as Link, Redirect} from "react-router-dom"

import { Articles, Home, Users } from "./views";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li> <Link to="/home">首页</Link></li>
          <li> <Link to="/article">文章</Link> </li>
          <li> <Link to="/user">用户</Link></li>
        </ul>
        <Route component={Home} path="/home"/>
        <Route component={Articles} path="/article"/>
        <Route component={Users} path="/user"/>
        <Redirect to="/home" from="/"/>
      </div>
    );
  }
}
