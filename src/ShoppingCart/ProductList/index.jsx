import React, { Component } from "react";
import ProductItem from "../ProductItem";

class ProductList extends Component {
  renderProducts = () => {
    // const productUIs = [];
    // for (let prod of this.props.data) {
    //   productUIs.push(
    //     <div className="col-3">
    //       <ProductItem />
    //     </div>
    //   );
    // }

    // [{},{},{}] => [div.col-3, div.col-3, div.col-3]

    const productUIs = this.props.data.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem
            handleCartList={this.props.handleCartList}
            prod={item}
            getProduct={this.props.getProduct}
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

export default ProductList;
