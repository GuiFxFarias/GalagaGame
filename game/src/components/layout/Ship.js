import { useEffect, useState } from "react";
import "./ShipCss.css";

function Ship() {
  const [Y, setY] = useState(0);
  const [X, setX] = useState(0);

  function moveDown() {
    setY(Y + 10);
  }

  function moveRight() {
    setX(X + 10);
  }

  function moveRight() {
    setX(X + 10);
  }

  function moveRight() {
    setX(X + 10);
  }

  return (
    <>
      <div
        className="ship"
        style={{ position: "absolute", top: `${Y}%`, left: `${X}%` }}
      ></div>
      <div className="dow">
        <button onClick={moveDown}>MoveDown</button>
        <button onClick={moveRight}>moveRight</button>
      </div>
    </>
  );
}

export default Ship;
