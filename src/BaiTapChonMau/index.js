/**
 * Các Bước Thực Hiện :
 * 1. dàn layout
 * 2. xác định những dử liệu thay đổi và lưu vào state
 * 3. thực thi các action của người dùng
 */

import React, { Component } from "react";

export default class BaiTapChonMauXe extends Component {
  state = {
    imgCar: "./img/car/products/red-car.jpg",
  };

  handleChangeColor = (imgCar) => {
    //immutable
    this.setState({
      // imgCar: imgCar,
      imgCar,
    });
  };

  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChangeColor("./img/car/products/black-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChangeColor("./img/car/products/red-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChangeColor("./img/car/products/silver-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChangeColor("./img/car/products/steel-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </a>
          </div>
          <div className="car">
            <img className="img-thumbnail" src={this.state.imgCar} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
