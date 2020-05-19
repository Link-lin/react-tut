import React, { Component } from 'react'

export default class CartList extends Component {
    render() {
        return (
            <table>
                <thead> 
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                    </tr>
                </thead>
            </table>
        )
    }
}
