import "./MobsCss.css";
import { motion } from "framer-motion";

function Mobs() {
  const variants = {
    active: {
      backgroundColor: "#f00",
    },
    inactive: {
      backgroundColor: "#fff",
      transition: { duration: 2 },
    },
  };
  return (
    <>
      <motion.div className="mob" animate="active" transition={variants} />
    </>
  );
}

export default Mobs;
