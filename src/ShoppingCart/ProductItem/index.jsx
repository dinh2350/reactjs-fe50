import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { img, name } = this.props.prod;
    return (
      <div className="card">
        <img src={img} alt="product item" style={{ height: 300 }} />
        <p className="lead">{name}</p>
        <button
          onClick={() => this.props.getProduct(this.props.prod)}
          className="btn btn-success"
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-danger my-1"
          onClick={() => this.props.handleCartList(this.props.prod)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}

export default ProductItem;
