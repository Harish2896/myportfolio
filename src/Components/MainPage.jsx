import { motion } from "framer-motion";
import WorkSlider from "./WorkSlider";

const MainPage = () => {
  const slideFromBottom = {
    hidden: { y: 1000, x: -5, scale: 0.24 },
    visible: {
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        y: {
          ease: [0, 0.53, 0.66, -0.03],
          duration: 2,
          delay: 1.6,
        },
        scale: {
          type: "spring",
          duration: 3.2,
          bounce: 0,
          delay: 3.7,
        },
        x: {
          duration: 1,
          delay: 4.5,
        },
      },
    },
  };

  return (
    <motion.div
      variants={slideFromBottom}
      initial="hidden"
      animate="visible"
      className="w-screen h-screen absolute top-0 left-0 overflow-hidden"
    >
      <WorkSlider />
    </motion.div>
  );
};

export default MainPage;
