import { motion } from "framer-motion";

const StartAnimationPage = () => {
  const slideFromBottom = {
    hidden: { y: 1000 },
    visible: (i) => ({
      y: 0,
      transition: {
        y: {
          ease: [0, 0.53, 0.66, -0.03],
          duration: 3,
          bounce: 0,
          delay: i * 0.3,
        },
      },
    }),
  };

  const slideFromTop = {
    hidden: { y: -1000 },
    visible: (i) => ({
      y: 0,
      transition: {
        y: {
          ease: [0, 0.53, 0.66, -0.03],
          duration: 2.5,
          bounce: 0,
          delay: i * 0.3,
        },
      },
    }),
  };

  const startAnimationZoomOut = {
    idle: { scale: 1, opacity: 1 },
    zoomOut: {
      scale: 5,
      opacity: 0,
      transition: {
        scale: {
          type: "spring",
          duration: 4,
          bounce: 0,
          delay: 3.7,
        },
        opacity: {
          duration: 0.2,
          delay: 6,
        },
      },
    },
  };
  return (
    <motion.div
      variants={startAnimationZoomOut}
      initial="idle"
      animate="zoomOut"
      className="text-black bg-black w-[125vw] h-screen overflow-hidden ml-[-12.5%] relative"
    >
      <article className="w-[24vw] h-screen absolute left-0 top-[-10vh] flex flex-col space-y-2">
        {array.map((el, index) => {
          return (
            <motion.div
              key={index}
              className="w-full h-[24vh] bg-red-500"
              variants={slideFromBottom}
              custom={el}
              initial="hidden"
              animate="visible"
            ></motion.div>
          );
        })}
      </article>
      <article className="w-[24vw] h-screen absolute left-[25vw] top-[10vh] flex flex-col space-y-2">
        {reverseArray.map((el, index) => {
          return (
            <motion.div
              key={index}
              className="w-full h-[24vh] bg-cyan-200"
              variants={slideFromTop}
              custom={el}
              initial="hidden"
              animate="visible"
            ></motion.div>
          );
        })}
      </article>
      <article className="w-[24vw] h-screen absolute left-[50vw] top-[-12vh] flex flex-col space-y-2">
        {array.map((el, index) => {
          return index !== 2 ? (
            <motion.div
              key={index}
              className="w-full h-[24vh] bg-purple-500"
              variants={slideFromBottom}
              custom={el}
              initial="hidden"
              animate="visible"
            ></motion.div>
          ) : (
            <motion.div
              key={index}
              className="w-full h-[24vh]"
              variants={slideFromBottom}
              custom={el}
              initial="hidden"
              animate="visible"
            ></motion.div>
          );
        })}
      </article>
      <article className="w-[24vw] h-screen absolute left-[75vw] top-[10vh] flex flex-col space-y-2">
        {reverseArray.map((el, index) => {
          return (
            <motion.div
              key={index}
              className="w-full h-[24vh] bg-indigo-800"
              variants={slideFromTop}
              custom={el}
              initial="hidden"
              animate="visible"
            ></motion.div>
          );
        })}
      </article>
      <article className="w-[24vw] h-screen absolute left-[100vw] top-[-10vh] flex flex-col space-y-2">
        {array.map((el, index) => {
          return (
            <motion.div
              key={index}
              className="w-full h-[24vh] bg-green-600"
              variants={slideFromBottom}
              custom={el}
              initial="hidden"
              animate="visible"
            ></motion.div>
          );
        })}
      </article>
    </motion.div>
  );
};

export default StartAnimationPage;
