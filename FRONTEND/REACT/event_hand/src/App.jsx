import React, { useState } from 'react';
import './App.css';

function App() {

  const [headingText, setHeading] = useState("Hello");
  const [isMouseOver, setMouse] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    // console.log("MousedOver");
    setMouse(true);
  }

  function handleMouseOut() {
    setMouse(false);
  }


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} type="submit" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Submit</button>
    </div>
  );
}

export default App;
