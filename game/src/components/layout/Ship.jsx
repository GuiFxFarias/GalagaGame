import { useState } from "react";
import Bullet from "./Bullet";
import "./ShipCss.css";

function Ship() {
  const [Y, setY] = useState(0);
  const [X, setX] = useState(0);
  const [area, setArea] = useState({
    left: 0,
    top: 0,
    right: 97,
    bottom: 95,
  });
  const [display, setDisplay] = useState("none");

  function moveShip(e) {
    let positionX = X;
    let positionY = Y;
    const key = e.key;

    switch (key) {
      case "ArrowLeft":
        setX(X - 1);
        break;
      case "ArrowRight":
        setX(X + 1);
        break;
      case "ArrowUp":
        setY(Y - 1);
        break;
      case "ArrowDown":
        setY(Y + 1);
        break;
      case "ArrowDown" && "ArrowRight":
        setY(Y + 1);
        setX(X + 1);
        break;
    }

    if (X >= area.right) {
      setX(positionX - 1);
    }

    if (X <= area.left) {
      setX(positionX + 1);
    }

    if (Y <= area.top) {
      setY(positionY + 1);
    }
    if (Y >= area.bottom) {
      setY(positionY - 1);
    }

    const code = e.code;
    console.log(display);

    if (code == "Space") {
      setDisplay("block");
      setInterval(() => {
        setDisplay("none");
      }, 6000);
    }
  }

  return (
    <>
      <div
        tabIndex="100"
        onKeyDown={moveShip}
        className="ship"
        style={{
          transition: "..6",
          position: "absolute",
          top: `${Y}%`,
          left: `${X}%`,
        }}
      ></div>
      
    </>
  );
}

export default Ship;
