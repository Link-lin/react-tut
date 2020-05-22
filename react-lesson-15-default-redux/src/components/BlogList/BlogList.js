import React, { Component } from "react";

import { connect } from "react-redux";
import BlogItem from "./BlogItem";
import { fetchBlogList } from '../../actions/blog'

class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBlogList()
  }

  // 本来还有对传入的数据做检测
  render() {
    console.log(this.props);

    const { list, isLoading } = this.props;
    return isLoading ? (
      <div>isLoading...</div>
    ) : (
      <ul>
        {list.map((blog) => {
          return <BlogItem key={blog.id} {...blog} />;
        })}
      </ul>
    );
  }
}

const mapState = (state) => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading,
  errMsg: state.blog.errMsg
});

export default connect(mapState, {fetchBlogList})(BlogList);
