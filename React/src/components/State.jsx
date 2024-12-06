import React, { useState } from "react";

function ImageManipulator() {
  const [size, setSize] = useState(100); // Default size percentage
  const [rotation, setRotation] = useState(0); // Default rotation in degrees

  const increaseSize = () => setSize(size + 10);
  const decreaseSize = () => setSize(size - 10);
  const rotateClockwise = () => setRotation(rotation + 15);
  const rotateCounterClockwise = () => setRotation(rotation - 15);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Manipulator</h1>
      <div
        style={{
          display: "inline-block",
          width: `${size}%`,
          transform: `rotate(${rotation}deg)`,
          transition: "all 0.3s ease",
        }}
      >
        <img
          src="https://via.placeholder.com/300"
          alt="Sample"
          style={{ width: "100%", display: "block" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={increaseSize}>Increase Size</button>
        <button onClick={decreaseSize} style={{ marginLeft: "10px" }}>
          Decrease Size
        </button>
        <button onClick={rotateClockwise} style={{ marginLeft: "10px" }}>
          Rotate Clockwise
        </button>
        <button onClick={rotateCounterClockwise} style={{ marginLeft: "10px" }}>
          Rotate Counterclockwise
        </button>
      </div>
    </div>
  );
}

export default ImageManipulator;
