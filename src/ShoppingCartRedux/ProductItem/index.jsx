import React, { Component } from "react";
import { connect } from "react-redux";
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
          onClick={() => this.props.addToCard(this.props.prod)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // key : value
    // key là props của component : value là phương thức gửi data lên store
    getProduct: (product) => {
      const actions = {
        type: "GET_PRODUCT",
        payload: product,
      };
      dispatch(actions);
    },
    addToCard: (product) => {
      const actions = {
        type: "ADD_TO_CART",
        payload: product,
      };
      dispatch(actions);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
