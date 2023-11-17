import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WorkSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrlS = [
    "https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1592853612111-aff937e36468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwtWUF3dHd3LUlkUXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1602182244320-12e14faa479f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwtWUF3dHd3LUlkUXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585704117586-de0f54469aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8LVlBd3R3dy1JZFF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1502211261676-a07824b55355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwtWUF3dHd3LUlkUXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  ];

  const slideTransition = {
    animate: (index) => {
      return {
        x: index === currentIndex ? 0 : index > currentIndex ? "70vw" : "-70vw",
        zIndex: index > currentIndex ? 6 - index : 7,
        scale: index === currentIndex ? 1.05 : 1,
        opacity: index === currentIndex ? 1 : 0,
        transition: {
          x: {
            type: "spring",
            bounce: 0,
            duration: index === currentIndex ? 1 : 0.7,
            // delay: index === currentIndex && 0.1,
          },
          zIndex: { delay: 0.1 },
          scale: {
            delay: index === currentIndex ? 0.6 : 0,
            duration: index === currentIndex ? 0.5 : 0.2,
          },
          opacity: {
            delay: index === currentIndex ? 0 : 0.7,
          },
        },
      };
    },
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrlS.length - 1 ? imageUrlS.length - 1 : prevIndex + 1
    );
  };
  //
  //
  return (
    <motion.div
      className="slider-container w-screen h-screen relative overflow-hidden bg-black"
      initial={{ scale: 2 }}
      animate={{
        scale: 1,
        transition: {
          type: "spring",
          duration: 3.2,
          bounce: 0,
          delay: 3.7,
        },
      }}
    >
      <div className="absolute text-2xl text-white left-0 top-0 z-50 w-full flex justify-center space-x-2">
        <Link to="/">HOME</Link>
        <span>|</span>
        <Link to="/about">ABOUT</Link>
      </div>
      {imageUrlS.map((url, index) => (
        <motion.div
          key={index}
          className="slide absolute top-0 left-0 w-screen h-screen bg-black z-0"
          variants={slideTransition}
          initial={false}
          animate="animate"
          custom={index}
        >
          <img
            className="w-screen h-screen object-cover"
            src={url}
            alt={`image${index}`}
            draggable={false}
          />
        </motion.div>
      ))}
      <div className="slider-controls absolute top-1/2 left-0 right-0 flex justify-between p-4 ">
        <button
          className="prev-button bg-gray-300 text-gray-700 px-4 py-2 rounded z-10"
          onClick={goToPreviousSlide}
        >
          Previous
        </button>
        <button
          className="next-button bg-gray-700 text-white px-4 py-2 rounded z-10"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default WorkSlider;
