import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [isHovered, setisHovered] = useState(false);
  const [mouseOut, setMouseOut] = useState();

  function handleClick() {}

  function handleHover() {
    console.log("Mouse Over");
    setisHovered(true);
  }
  //when handleHover() we set isHovered to true
  //if isHovered is true color black if not color white

  function handleMouseOut() {
    setisHovered(false);
  }
  //when isHovered is false, the color will turn back to white

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isHovered ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
