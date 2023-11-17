import MainPage from "./MainPage";
import StartAnimationPage from "./StartAnimationPage";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh", transition: { duration: 0.4 } }}
    >
      <StartAnimationPage />
      <MainPage />
    </motion.div>
  );
};

export default Home;
