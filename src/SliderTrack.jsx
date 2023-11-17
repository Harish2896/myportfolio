// import { useState } from "react";
// import { motion } from "framer-motion";

// const slides = [
//   "#FF0000", // Red
//   "#FF7F00", // Orange
//   "#FFFF00", // Yellow
//   "#00FF00", // Green
//   "#0000FF", // Blue
//   "#4B0082", // Indigo
//   "#9400D3", // Violet
// ];

// const SliderTrack = () => {
//   const [aniOn, setAniOn] = useState(false);
//   // const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <motion.div className="flex gap-2 bg-gray-200 h-[52vmin] absolute top-1/4 left-1/2">
//       {slides.map((color, index) => {
//         return (
//           <motion.div
//             key={index}
//             className={
//               aniOn ? `w-[40vmin] h-[52vmin] relative` : "w-[40vmin] h-[52vmin]"
//             }
//             style={{
//               backgroundColor: color,
//             }}
//               animate={
//               aniOn
//                 ? {
//                     y: 420,
//                     x: 0,
//                     zIndex: 20,
//                     width: "8vmin",
//                     height: "6vmin",
//                     transition: {
//                       type: "tween",
//                       duration: 0.4,
//                       delay: index * 0.05,
//                       y: { duration: 0.4, delay: index * 0.05 },
//                     },
//                   }
//                 : {
//                     y: 0,
//                     x: 0,
//                     width: "40vmin",
//                     height: "52vmin",
//                     transition: {
//                       type: "tween",
//                       duration: 0.5,
//                       delay: index * 0.05,
//                       y: { duration: 0.4, delay: index * 0.1 },
//                     },
//                   }
//             }
//           >
//             {index + 1}
//           </motion.div>
//         );
//       })}
//       <button
//         className={
//           aniOn
//             ? "absolute top-0 bg-red-600 text-black "
//             : "absolute bg-gray-600 top-0 text-white "
//         }
//         onClick={() => setAniOn(!aniOn)}
//       >
//         animateOn
//       </button>
//     </motion.div>
//   );
// };

// export default SliderTrack;

// //
// //<motion.div/>
// //       className="flex gap-2 bg-black absolute top-1/2 left-1/2 translate-y-[-50%]"
// //       animate={
// //         aniOn
// //           ? { x: 10, y: -150, transition: { duration: 0.5 } }
// //           : { x: 0, y: -150, transition: { duration: 0.5 } }
// //       }
// //     >
// //       {slides.map((color, index) => {
// //         return (
// //           <motion.div
// //             key={index}
// //             className={`w-[40vmin] h-[52vmin]`}
// //             style={{
// //               backgroundColor: color,
// //             }}
// //             onClick={() => setCurrentIndex(index)}
// //             animate={
// //               aniOn
// //                 ? {
// //                     y: 0,
// //                     x: 0,
// //                     width: "40vmin",
// //                     height: "52vmin",
// //                     transition: {
// //                       type: "tween",
// //                       duration: 0.5,
// //                       delay: index * 0.1,
// //                     },
// //                   }
// //                 : index === currentIndex
// //                 ? {
// //                     y: -180,
// //                     x: -680,
// //                     width: "100vw",
// //                     height: "100vh",
// //                     transition: {
// //                       type: "tween",
// //                       duration: 0.5,
// //                       delay: index * 0.1,
// //                       y: { duration: 0.2 },
// //                     },
// //                   }
// //                 : {
// //                     y: 400,
// //                     x: -1100,
// //                     zIndex: 20,
// //                     width: "8vmin",
// //                     height: "6vmin",
// //                     transition: {
// //                       type: "tween",
// //                       duration: 0.5,
// //                       delay: index * 0.1,
// //                       y: { duration: 0.2 },
// //                     },
// //                   }
// //             }
// //           >
// //             {index + 1}
// //           </motion.div>
// //         );
// //       })}
// //       <button
// //         className="absolute top-0 bg-white text-black"
// //         onClick={() => setAniOn(!aniOn)}
// //       >
// //         animate On
// //       </button>
// //     </motion.div>

// // const SliderTrack = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const goToPreviousSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
// //     );
// //   };

// //   const goToNextSlide = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
// //     );
// //   };
// //   console.log(currentIndex);
// //   return (
// //     <div className="h-screen flex overflow-hidden">
// //       <motion.div
// //         className="flex"
// //         initial={{ x: -currentIndex * 100 + "vw" }}
// //         animate={{
// //           x: -currentIndex * 100 + "vw",
// //         }}
// //         transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
// //       >
// //         {slides.map((color, index) => (
// //           <motion.div
// //             key={index}
// //             className="slide w-screen h-screen text-4xl text-center text-black"
// //             style={{ backgroundColor: color }}
// //             initial={{ opacity: 0, scale: 1.2 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ type: "spring", delay: 0.1 * index, duration: 0.5 }}
// //           >
// //             {index + 1}
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //       <div className="slider-controls absolute bottom-0 left-0 right-0 flex justify-between p-4">
// //         <button
// //           className="prev-button bg-gray-300 text-gray-700 px-4 py-2 rounded"
// //           onClick={goToPreviousSlide}
// //         >
// //           Previous
// //         </button>
// //         <button
// //           className="next-button bg-gray-300 text-gray-700 px-4 py-2 rounded"
// //           onClick={goToNextSlide}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SliderTrack;
