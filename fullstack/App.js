import React, { useState } from "react";
import "./App.css";

function App() {
  const [textColor, setTextColor] = useState("black"); // Default text color

  const changeColor = (color) => {
    setTextColor(color);
  };

  return (
    <div className="App">
      <h1 style={{ color: textColor }}>Change My Text Color!</h1>
      <div className="button-container">
        <button onClick={() => changeColor("red")} style={{ color: "red" }}>
          Red
        </button>
        <button onClick={() => changeColor("blue")} style={{ color: "blue" }}>
          Blue
        </button>
        <button onClick={() => changeColor("black")} style={{ color: "black" }}>
          Black
        </button>
        <button onClick={() => changeColor("green")} style={{ color: "green" }}>
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
