import Bullet from "../layout/Bullet";
import Mobs from "../layout/Mobs";
import Ship from "../layout/Ship";

import "./BackPageCss.css";

function BackPage({ customClass }) {
  return (
    <>
      <div className={`${customClass} container`}>
        <Mobs />
        <Ship />
      </div>
    </>
  );
}

export default BackPage;
