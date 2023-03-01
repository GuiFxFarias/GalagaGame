import { useState } from "react";
import Bullet from "./Bullet";
import "./ShipCss.css";

function Ship() {
  const [Y, setY] = useState(90);
  const [X, setX] = useState(50);
  const [area, setArea] = useState({
    left: 0,
    top: 0,
    right: 97,
    bottom: 95,
  });
  const [display, setDisplay] = useState("none");

  const [shotX, setSX] = useState(X);
  const [shotY, setSY] = useState(Y);
  const [areaS, setAreaS] = useState({
    left: 0,
    top: -2,
    right: 97,
    bottom: 95,
  });

  function moveShip(e) {
    let positionX = X;
    let positionY = Y;
    const code = e.code;

    switch (code) {
      case "ArrowLeft":
        setX(X - 2);
        break;
      case "ArrowRight":
        setX(X + 2);
        break;
      case "ArrowUp":
        setY(Y - 2);
        break;
      case "ArrowDown":
        setY(Y + 2);
        break;
      case "ArrowDown" && "ArrowRight":
        setY(Y + 2);
        setX(X + 2);
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

    // switch (code) {
    //   case "Space":
    //     setSY(shotY - 4);
    //     setSX(X);
    //     break;
    // }

    // if (shotY <= areaS.top) {
    //   setSY(Y);
    // }
  }

  return (
    <>
      <div
        tabIndex="100"
        onKeyDown={moveShip}
        className="ship"
        style={{
          cursor: "pointer",
          transition: ".1s ", 
          position: "absolute",
          top: `${Y}%`,
          left: `${X}%`,
        }}
      ></div>
      {/* <Bullet shipX={shotX} shipY={shotY}/> */}
    </>
  );
}

export default Ship;
