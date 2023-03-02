import { useState } from "react";
import "./BulletCss.css";

function Bullet({ shipY, shipX, opacityShot }) {
  return (
    <>
      <div
        style={{
          display: "block",
          top: `${shipY}%`,
          left: `${shipX}%`,
          animation: "bala",
          opacityShot: opacityShot,
        }}
        className="bullet"
      ></div>
    </>
  );
}

export default Bullet;
