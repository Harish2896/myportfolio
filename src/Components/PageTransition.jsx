import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0, transition: { duration: 0.5, delay: 0.3 } }}
      exit={{ y: "100vh", transition: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
