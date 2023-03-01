import { useState } from "react";
import "./BulletCss.css";

function Bullet({ shipX, shipY }) {
  const [shotX, setSX] = useState();
  const [shotY, setSY] = useState();

  function shotBullet(e) {
    console.log(e.code);
  }

  return (
    <>
      <div
        onKeyDown={shotBullet}
        tabIndex="-1"
        style={{ display: "block", top: `${shipY}%`, left: `${shipX}%` }}
        className="bullet"
      ></div>
    </>
  );
}

export default Bullet;
