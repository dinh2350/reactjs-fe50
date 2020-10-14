import React, { Component } from "react";
import ProductItem from "../ProductItem";
import { connect } from "react-redux";
class ProductList extends Component {
  renderProducts = () => {
    const productUIs = this.props.productList.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem
            handleCartList={this.props.handleCartList}
            prod={item}
            // getProduct={this.props.getProduct}
          />
        </div>
      );
    });

    return productUIs;
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // key : value
    // key là props của component : value là state trên store
    productList: state.gioHangReducer.productList,
  };
};

export default connect(mapStateToProps)(ProductList);
