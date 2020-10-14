import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
class Detail extends Component {
  render() {
    if (!this.props.selectedProduct) {
      return (
        <h2 className="text-center text-white"> Bạn Chưa Chọn sản phẩm </h2>
      );
    }

    const {
      img,
      name,
      screen,
      backCamera,
      frontCamera,
      price,
    } = this.props.selectedProduct;
    return (
      <div className="container mt-5 bg-white rounded py-5">
        <div className="row">
          <div className="col-4">
            <p
              style={{
                color: "#ff0000",
                backgroundColor: "yellow",
              }}
              className="product-title"
            >
              {name}
            </p>
            <img src={img} alt="product detail" />
          </div>
          <div className="col-8">
            <h1>Thông số kĩ thuật</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{screen}</td>
                </tr>

                <tr>
                  <td>Camera trước</td>
                  <td>{frontCamera}</td>
                </tr>

                <tr>
                  <td>Camera sau</td>
                  <td>{backCamera}</td>
                </tr>

                <tr>
                  <td>Giá</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.gioHangReducer.selectedProduct,
  };
};

export default connect(mapStateToProps)(Detail);
