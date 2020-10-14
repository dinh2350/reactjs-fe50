import React from "react";

export default function HandleEventFunction() {
  // hàm handleClick
  const handleClick = (name) => {
    alert(`hello ${name}`);
  };

  return (
    <div>
      <h2> Handle Event Function </h2>
      {/* xử lý sự kiện trong javascript */}
      {/* <button onclick="handleClick()">click me</button> */}
      {/* xử lý sự kiện trong ReactJS */}
      {/* onchange => onChange */}
      {/* <button onClick={handleClick}>click me ReactJS</button> */}
      {/* xử lý sự kiện trong ReactJS có tham số */}
      <button
        onClick={() => {
          handleClick("Hào");
        }}
      >
        click me ReactJS có tham số
      </button>
    </div>
  );
}
