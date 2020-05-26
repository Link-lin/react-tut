import React, { Component } from 'react'

export default class ArticleDetail extends Component {
    render() {
        return (
            <div>
                文章详情{this.props.match.params.id}
            </div>
        )
    }
}
