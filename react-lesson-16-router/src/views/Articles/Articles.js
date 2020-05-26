import React, { Component } from "react";
import ArticleDetail from "./ArticleDetail";
import { Link, Route } from "react-router-dom";
export default class Articles extends Component {
  render() {
    return (
      <div>
        <Link to="/article/1">article 1 </Link>
        <Link to="/article/2">article 2 </Link>
        <Route component={ArticleDetail} path="/article/:id" />
      </div>
    );
  }
}
