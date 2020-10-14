import React, { Component } from "react";
import Detail from "../Detail";
import Header from "../Header";
import ProductList from "../ProductList";
import bgImage from "../../assets/img/bg.png";
import CartList from "../CartList";

class Home extends Component {
  data = [
    {
      id: "sp_1",
      name: "iphoneX",
      price: 30000000,
      screen: "screen_1",
      backCamera: "backCamera_1",
      frontCamera: "frontCamera_1",
      img:
        "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
      desc:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      id: "sp_2",
      name: "Note 7",
      price: 2000000,
      screen: "screen_2",
      backCamera: "backCamera_2",
      frontCamera: "frontCamera_2",
      img:
        "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
      desc:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      name: "Vivo",
      price: 35000000,
      screen: "screen_3",
      backCamera: "backCamera_3",
      frontCamera: "frontCamera_3",
      img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
      desc:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      name: "Blacberry",
      price: 4500000000,
      screen: "screen_4",
      backCamera: "backCamera_4",
      frontCamera: "frontCamera_4",
      img:
        "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
      desc:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];

  state = {
    selectedProduct: null,
    cartList: [],
  };

  handleChangeAmount = (cart, status) => {
    console.log(cart, status);
    const { cartList } = this.state;
    const index = cartList.findIndex((item) => {
      return item.id === cart.id;
    });
    if (index !== -1) {
      if (status) {
        // cộng
        cartList[index].amount += 1;
      } else {
        // trừ
        if (cartList[index].amount > 1) {
          cartList[index].amount -= 1;
        } else {
          alert("không được giảm nửa");
        }
      }
    }
    this.setState({
      cartList,
    });
  };

  handleDeleteCart = (cart) => {
    console.log(cart);
    let { cartList } = this.state;
    cartList = cartList.filter((item) => {
      return item.id !== cart.id;
    });
    this.setState({
      // cartList: cartList,
      cartList, // object literal
    });
  };

  handleCartList = (product) => {
    // let cartList = this.state.cartList;
    let { cartList } = this.state;
    /**
     * findIndex là phương thức của es6 cung cấp
     *      tìm thấy  => index
     *      không tìm thấy => -1
     *  */
    const index = cartList.findIndex((card) => {
      return card.id === product.id;
    });
    if (index !== -1) {
      // tìm thấy => tăng số lượng
      cartList[index].amount += 1;
    } else {
      // không tìm thấy =>  thêm thuộc tính số lượng , push vô
      product.amount = 1;
      cartList.push(product);
    }

    this.setState(
      {
        // cartList : cartList,
        cartList, // object literal
      },
      function () {
        console.log(this.state.cartList);
      }
    );
  };

  getProduct = (product) => {
    console.log(product, "Đối tượng lấy được từ item");

    this.setState(
      {
        selectedProduct: product,
      },
      () => {
        console.log(this.state.selectedProduct);
      }
    );
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          minHeight: "100vh",
        }}
      >
        <Header />
        <ProductList
          handleCartList={this.handleCartList}
          getProduct={this.getProduct}
          data={this.data}
        />
        {this.state.selectedProduct && (
          <Detail selectedProduct={this.state.selectedProduct} />
        )}
        <CartList
          handleChangeAmount={this.handleChangeAmount}
          handleDeleteCart={this.handleDeleteCart}
          cartList={this.state.cartList}
        />
      </div>
    );
  }
}

export default Home;
