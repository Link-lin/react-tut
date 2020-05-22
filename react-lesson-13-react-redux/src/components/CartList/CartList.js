import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../actions/cart";
class CartList extends Component {
  render() {
    console.log("hello");
    console.log(this.props);
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
        <tbody>
          {
            this.props.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={
                    () => {
                      this.props.decrement(item.id)
                    }
                  }>-</button>
                  <span> {item.amount}</span>
                  <button onClick={
                    () => {
                      this.props.increment(item.id)
                    }
                  }>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartList: state.cart,
  };
};

/*
const mapDispatchToProps = (dispatch) => {
  return{
    add: (id) => dispatch(increment(id)),
    minus: (id) => dispatch(decrement(id))
  }
}
*/

export default connect(mapStateToProps, {increment, decrement})(CartList);
