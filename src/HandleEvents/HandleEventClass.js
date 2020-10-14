import React, { Component } from "react";

export default class HandleEventClass extends Component {
  // phương thức
  message = "hello";

  showMessage(message) {
    console.log("show message:", message);
  }

  showMessageWithThis = () => {
    console.log(this.message);
  };

  render() {
    return (
      <div>
        <h2>Handle Event Class {this.message}</h2>
        <button
          onClick={() => {
            this.showMessage("hieu dep trai");
          }}
        >
          Click Tui
        </button>
        <button onClick={this.showMessageWithThis}>Click Tui có tham số</button>

        {/* <div>{this.showMessageWithThis()}</div> */}
      </div>
    );
  }
}
