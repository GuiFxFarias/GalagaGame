import { useState } from "react";
import "./BulletCss.css";



function Bullet({ shipY, shipX, shotFunction }) {
  

  return (
    <>
      <div
        onKeyDown={shotFunction}
        style={{ display: "block", top: `${shipY}%`, left: `${shipX}%` }}
        className="bullet"
      ></div>
    </>
  );
}

export default Bullet;
