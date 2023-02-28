import { useState } from "react";
import "./ShipCss.css";

function Ship() {
  let posY = 0;
  let posX = 0;

  function moveDown() {
    console.log(posY);
    return (posY += 10);
  }

  return (
    <>
      <div
        className="ship"
        style={{ position: "absolute", top: `${posY}%`, left: `${posX}%` }}
      ></div>
      <div className="dow">
        <button onClick={moveDown}>MoveDown</button>
      </div>
    </>
  );
}

export default Ship;
