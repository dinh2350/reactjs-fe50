import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { cart } = this.props;
    return (
      <tr>
        <td>{cart.id}</td>
        <td>{cart.name}</td>
        <td>
          <img src={cart.img} alt="" width="50px" />
        </td>
        <td>{cart.price} VNĐ</td>
        <td>
          <button onClick={() => this.props.handleChangeAmount(cart, false)}>
            -
          </button>
          {cart.amount}
          <button onClick={() => this.props.handleChangeAmount(cart, true)}>
            +
          </button>
        </td>
        <td>{cart.price * cart.amount} VNĐ</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleDeleteCart(cart)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
