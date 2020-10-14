import React, { Component } from "react";

class MovieItem extends Component {
  state = {
    isShowDetail: false,
    // a: 1,
    // b: 2,
    // c: 3,
  };

  showDetail = () => {
    if (this.state.isShowDetail) return this.props.item.moTa;
    return this.props.item.moTa.substr(0, 100) + "...";
  };

  onViewDetailClick = () => {
    //immutable
    this.setState({
      isShowDetail: !this.state.isShowDetail,
    });
  };

  viewDetailText = () => {
    if (this.state.isShowDetail) return "Rút gọn";
    return "Xem thêm";
  };

  render() {
    // props là thuộc tính mặc định của component,
    // hứng dữ liệu được truyền từ ngoài vào
    console.log(this.props.item);

    //destructuring: bóc tách phần tử
    const { hinhAnh: image, tenPhim: movieName } = this.props.item;
    // const { hinhAnh: image } = this.props.item2;

    return (
      <div className="card">
        <img src={image} alt="movie" />
        <div className="card-body">
          <h4>{movieName}</h4>
          <p>{this.showDetail()}</p>
          <span onClick={this.onViewDetailClick} className="text-info">
            {/* {this.viewDetailText()} */}
            {this.state.isShowDetail ? "Rút gọn" : "Xem thêm"}
          </span>
        </div>
      </div>
    );
  }
}

export default MovieItem;
