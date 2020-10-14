import React, { Component } from "react";

export default class DemoLogin extends Component {
  /**
   * @isLogin là thuộc tính của class
   *      true : đã login
   *      false : chưa login
   */
  state = {
    isLogin: false,
  };

  isLogin = false;
  // phuong thức của class
  renderLogin = () => {
    if (this.state.isLogin) {
      return <p>Nguyễn Phong Hào</p>;
    } else {
      return <button onClick={this.handleLogin}>Login</button>;
    }
    // toán tử 3 ngôi : (điều kiện ? thực thi DK đúng : thực thi DK sai)
    // return this.isLogin ? <p>Nguyễn Phong Hào</p> : <button>Login</button>;
  };
  handleLogin = () => {
    // this.state.isLogin = true; cách này sai ko làm cho render chạy lại
    this.setState({
      isLogin: true,
    });
  };
  render() {
    console.log("run render");
    return (
      <div>
        <h2>State và if eles</h2>
        {this.renderLogin()}
      </div>
    );
  }
}
