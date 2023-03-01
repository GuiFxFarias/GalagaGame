import Bullet from "../layout/Bullet";
import Ship from "../layout/Ship";

import "./BackPageCss.css";

function BackPage({ customClass }) {
  return (
    <>
      <div className={`${customClass} container`}>
        <Ship />
      </div>
    </>
  );
}

export default BackPage;
