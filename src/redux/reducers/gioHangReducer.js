const initialState = {
  selectedProduct: null,
  cartList: [],
  productList: [
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
  ],
};
const gioHangReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_PRODUCT": {
      state.selectedProduct = actions.payload;
      return { ...state };
    }
    case "ADD_TO_CART": {
      let cartList = state.cartList;
      /**
       * findIndex là phương thức của es6 cung cấp
       *      tìm thấy  => index
       *      không tìm thấy => -1
       *  */
      const index = cartList.findIndex((card) => {
        return card.id === actions.payload.id;
      });
      if (index !== -1) {
        // tìm thấy => tăng số lượng
        cartList[index].amount += 1;
      } else {
        // không tìm thấy =>  thêm thuộc tính số lượng , push vô
        actions.payload.amount = 1;
        cartList.push(actions.payload);
      }

      state.cartList = cartList;

      return { ...state }; //setSate
    }
    default:
      return state;
  }
};

export default gioHangReducer;
