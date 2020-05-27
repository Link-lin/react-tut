import React, { Component } from "react";
import { Route, NavLink as Link, Redirect, Switch } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";

import { Articles, Home, Users, ArticleDetail } from "./views";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Button type="primary"> Button</Button>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/article">文章</Link>{" "}
          </li>
          <li>
            <Link to="/user">用户</Link>
          </li>
        </ul>
        <Switch>
          <Route component={Home} path="/home" />
          <Route component={Articles} path="/article" exact />
          <Route component={ArticleDetail} path="/article/:id" />
          <Route component={Users} path="/user" />
          <Redirect to="/home" from="/" />
        </Switch>
      </div>
    );
  }
}
