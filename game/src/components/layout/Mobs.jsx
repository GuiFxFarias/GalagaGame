import "./MobsCss.css";
import { motion } from "framer-motion";

function Mobs() {
  return (
    <>
      <motion.div
        className="mob"
        animate={{ x: ["100px", "0px", "400px"] }}
        onAnimationIteration={Infinity}
      />
    </>
  );
}

export default Mobs;
