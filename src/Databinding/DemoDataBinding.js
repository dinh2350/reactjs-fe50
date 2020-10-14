import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  // ten và lớp là thuộc tính của class DemoDataBinding
  ten = "Hào";
  lop = 50;

  // renderInfo là phương thức của class DemoDataBinding
  renderInfo = () => {
    return (
      <div>
        <p>tên : {this.ten} </p>
        <p>lớp : {this.lop} </p>
      </div>
    );
  };

  render() {
    //   hinhAnh là biến của phương thức render
    let hinhAnh =
      "https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png";
    return (
      <div>
        <h2>Data Binding</h2>
        {this.renderInfo()}
        <img src={hinhAnh} alt="hinh dep" />
      </div>
    );
  }
}
