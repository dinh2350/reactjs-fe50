import React, { Component } from "react";
import CartItem from "../CartItem";

class CartList extends Component {
  renderCartList = () => {
    return this.props.cartList.map((cart, index) => {
      return (
        <CartItem
          handleChangeAmount={this.props.handleChangeAmount}
          handleDeleteCart={this.props.handleDeleteCart}
          key={index}
          cart={cart}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              maxWidth: "1000px",
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>mã sản phẩm</th>
                      <th> tên sản phẩm </th>
                      <th> hình ảnh </th>
                      <th> giá </th>
                      <th> số lượng </th>
                      <th> tổng tiền </th>
                      <th>hành động</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartList()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;
